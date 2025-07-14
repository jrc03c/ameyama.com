// NOTE: This function doesn't verify that the requester owns the email address;
// it simply creates the account as requested.

import { createToken } from "../../utils/jwt-helpers/index.mjs"
import { getRequestBody } from "../../utils/get-request-body.mjs"
import { pause } from "@jrc03c/pause"
import { setResponseCookie } from "../../utils/cookie-helpers/index.mjs"
import { verifyPassword } from "./verify-password.mjs"

async function register(request, response, app) {
  try {
    const { email, password } = await getRequestBody(request)

    if (!email || typeof email !== "string") {
      await pause(app.badRequestTimeout)

      return response.status(400).send({
        message:
          "The request body must include an 'email' property with a string value!",
      })
    }

    if (!password || typeof password !== "string") {
      await pause(app.badRequestTimeout)

      return response.status(400).send({
        message:
          "The request body must include an 'password' property with a string value!",
      })
    }

    // If the user is already registered, then just verify their credentials and
    // log them in.
    if (await app.passwordManager.hasPassword(email)) {
      return verifyPassword(request, response, app)
    }

    await app.passwordManager.setPassword(email, password)

    // - create a token (jwt)
    // - return the token in a success response
    const payload = {
      email,
      exp: new Date().getTime() + app.tokenTTL,
    }

    const token = createToken(payload, app.password)
    setResponseCookie(response, app.authTokenCookieName, token)

    app.logger.logInfo(`New user registered: "${email}"`)
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

export { register }
