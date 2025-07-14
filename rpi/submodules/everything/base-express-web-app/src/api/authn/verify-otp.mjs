import { createToken } from "../../utils/jwt-helpers/index.mjs"
import { pause } from "@jrc03c/pause"
import { getRequestBody } from "../../utils/get-request-body.mjs"
import { setResponseCookie } from "../../utils/cookie-helpers/index.mjs"
import { shortHash } from "../../utils/short-hash.mjs"
import { standardizeEmailAddress } from "../../utils/standardize-email-address.mjs"

async function verifyOTP(request, response, app) {
  try {
    const body = await getRequestBody(request)
    let { email } = body

    if (!email || typeof email !== "string") {
      await pause(app.badRequestTimeout)

      return response
        .status(400)
        .send({ message: `Please use a valid email address.` })
    }

    email = standardizeEmailAddress(email)
    await app.emailValidator.load()

    if (!app.emailValidator.isValid(email)) {
      await pause(app.badRequestTimeout)

      return response
        .status(400)
        .send({ message: `Please use a valid email address.` })
    }

    // - check to see if a one-time passcode is stored in the database
    const { otp } = body
    const hashedEmail = await shortHash(email)
    const dbKey = "/authn/" + hashedEmail + "/otp"
    const storedOTP = app.database.readSync(dbKey)
    const invalidPasscodeMessage = "Invalid passcode."

    let attempts =
      (app.database.readSync(
        "/authn/" + hashedEmail + "/failed-otp-attempts",
      ) || 0) + 1

    // - if it's not, or if it's missing data, then:
    //   - return an error response
    if (!storedOTP || !storedOTP.value || !storedOTP.creationTime) {
      app.logger.logWarning(
        `User "${hashedEmail}" tried to submit an OTP, but it seems that they never requested one.`,
      )

      app.database.writeSync(
        "/authn/" + hashedEmail + "/failed-otp-attempts",
        attempts,
      )

      if (attempts >= 3) {
        app.database.writeSync("/authn/" + hashedEmail + "/otp", null)
      }

      await pause(app.badRequestTimeout)

      return response
        .status(401)
        .send({ message: invalidPasscodeMessage, attempts })
    }

    // - if an OTP creation time was stored in the database, but it's an
    //   invalid date value, then:
    //   - log an error
    //   - return an error response
    const creationTime = new Date(storedOTP.creationTime)

    if (creationTime.toString() === "Invalid Date") {
      throw new Error(
        `An OTP is stored in the database for user "${hashedEmail}", but it doesn't have a proper \`creationTime\` value!`,
      )
    }

    // - if the OTP has expired, then:
    //   - return an error response
    if (new Date() - creationTime > app.otpTTL) {
      app.logger.logWarning(
        `User "${hashedEmail}" tried to use an expired OTP.`,
      )

      app.database.writeSync(
        "/authn/" + hashedEmail + "/failed-otp-attempts",
        attempts,
      )

      if (attempts >= 3) {
        app.database.writeSync("/authn/" + hashedEmail + "/otp", null)
      }

      await pause(app.badRequestTimeout)

      return response
        .status(401)
        .send({ message: invalidPasscodeMessage, attempts })
    }

    // - if the given OTP doesn't match the OTP stored in the database, then:
    //   - return an error response
    if (otp !== storedOTP.value) {
      app.logger.logWarning(
        `User "${hashedEmail}" submitted an OTP that didn't match the one in our database.`,
      )

      app.database.writeSync(
        "/authn/" + hashedEmail + "/failed-otp-attempts",
        attempts,
      )

      if (attempts >= 3) {
        app.database.writeSync("/authn/" + hashedEmail + "/otp", null)
      }

      await pause(app.badRequestTimeout)

      return response
        .status(401)
        .send({ message: invalidPasscodeMessage, attempts })
    }

    // if everything was successful so far, then delete the user's otp data
    app.database.writeSync("/authn/" + hashedEmail + "/otp", null)

    // - create a token (jwt)
    // - return the token in a success response
    const payload = {
      email,
      exp: new Date().getTime() + app.tokenTTL,
    }

    const token = createToken(payload, app.password)
    setResponseCookie(response, app.authTokenCookieName, token)

    app.logger.logInfo(`User "${email}" verified their OTP.`)
    return response.send()
  } catch (e) {
    app.logger.logError(e)
    await pause(app.badRequestTimeout)

    return response.status(500).send({
      message:
        "An unknown server-side error occurred. Please contact the server administrator for help.",
    })
  }
}

export { verifyOTP }
