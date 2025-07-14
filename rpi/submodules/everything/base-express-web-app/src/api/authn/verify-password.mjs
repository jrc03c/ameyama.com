// NOTE: This function doubles as a login method.
import { createToken } from "../../utils/jwt-helpers/index.mjs"
import { getRequestBody } from "../../utils/get-request-body.mjs"
import { pause } from "@jrc03c/pause"
import { setResponseCookie } from "../../utils/cookie-helpers/index.mjs"
import { standardizeEmailAddress } from "../../utils/standardize-email-address.mjs"

async function verifyPassword(request, response, app) {
  try {
    let { email, password } = await getRequestBody(request)

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

      return response.status(400).send({
        message: "Please use a valid email address.",
      })
    }

    if (!password || typeof password !== "string") {
      await pause(app.badRequestTimeout)

      return response.status(400).send({
        message:
          "The request must include a 'password' property with a string value!",
      })
    }

    if (!(await app.passwordManager.passwordIsCorrect(email, password))) {
      app.logger.logWarning(`User "${email}" failed to verify their password.`)
      await pause(app.badRequestTimeout)

      return response
        .status(401)
        .send({ message: "Incorrect email or password." })
    }

    // - create a token (jwt)
    // - return the token in a success response
    const payload = {
      email,
      exp: new Date().getTime() + app.tokenTTL,
    }

    const token = createToken(payload, app.password)
    setResponseCookie(response, app.authTokenCookieName, token)

    app.logger.logInfo(`User "${email}" verified their password.`)
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

export { verifyPassword }
