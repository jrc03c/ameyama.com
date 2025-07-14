import { getRequestBody } from "../../utils/get-request-body.mjs"
import { pause } from "@jrc03c/pause"
import { randomString } from "@jrc03c/js-crypto-helpers"
import { shortHash } from "../../utils/short-hash.mjs"
import { standardizeEmailAddress } from "../../utils/standardize-email-address.mjs"

async function sendOTPEmail(request, response, app) {
  try {
    let { email } = await getRequestBody(request)

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

    const hashedEmail = await shortHash(email)
    const dbKey = "/authn/" + hashedEmail + "/otp"

    // - check to see if an otp already exists in the database
    // - if it does, then:
    if (app.database.existsSync(dbKey)) {
      // - check to see if it has expired
      const storedOTP = app.database.readSync(dbKey)
      const creationTime = new Date(storedOTP.creationTime)

      // - if it has not expired yet, then:
      //   - return an error response
      const elapsedTime = new Date() - creationTime

      if (
        creationTime.toString() !== "Invalid Date" &&
        elapsedTime < app.otpTTL
      ) {
        app.logger.logWarning(
          `User "${hashedEmail}" requested a new OTP email ${
            elapsedTime / (60 * 1000)
          } minutes after they first requested one.`,
        )

        return response.send()
      }
    }

    // - else:
    //   - generate an otp
    //   - store it in the database
    //   - email it to the given address
    //   - return a success response
    const otp = randomString(app.otpLength)

    app.database.writeSync(dbKey, {
      value: otp,
      creationTime: new Date().toJSON(),
    })

    const info = await app.mailer.send({
      to: email,
      subject: `${app.name}: one-time passcode`,
      text: `Use this code to finish logging in: ${otp}`,
      html: `Use this code to finish logging in: <b>${otp}</b>`,
    })

    if (!info.wasSent) {
      throw new Error(info.message)
    }

    app.logger.logInfo(`Sent an OTP email to "${email}".`)
    return response.send()
  } catch (e) {
    app.logger.log(e, "error")
    await pause(app.badRequestTimeout)

    return response.status(500).send({
      message:
        "An unknown server-side error occurred. Please contact the server administrator for help.",
    })
  }
}

export { sendOTPEmail }
