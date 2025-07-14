// NOTE: This function doubles as a login method.
import { createToken } from "../../utils/jwt-helpers/index.mjs"
import { getRequestBody } from "../../utils/get-request-body.mjs"
import { pause } from "@jrc03c/pause"
import { setResponseCookie } from "../../utils/cookie-helpers/index.mjs"
import { standardizeEmailAddress } from "../../utils/standardize-email-address.mjs"

async function changePassword(request, response, app) {
  try {
    let { email, passwordNew, passwordOld } = await getRequestBody(request)

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

    if (!(await app.requestIsAuthorized(request))) {
      await pause(app.badRequestTimeout)

      return response.status(401).send({
        message: "You don't seem to be logged in. Please log in again.",
      })
    }

    if (!passwordNew || typeof passwordNew !== "string") {
      await pause(app.badRequestTimeout)

      return response.status(400).send({
        message:
          "The request must include a 'passwordNew' property with a string value!",
      })
    }

    if (!passwordOld || typeof passwordOld !== "string") {
      await pause(app.badRequestTimeout)

      return response.status(400).send({
        message:
          "The request must include a 'passwordOld' property with a string value!",
      })
    }

    if (!(await app.passwordManager.passwordIsCorrect(email, passwordOld))) {
      app.logger.logWarning(
        `User "${email}" failed to verify their (old) password while attempting to change their password.`,
      )

      await pause(app.badRequestTimeout)

      return response
        .status(401)
        .send({ message: "Incorrect email or password." })
    }

    await app.passwordManager.setPassword(email, passwordNew)

    // - create a token (jwt)
    // - return the token in a success response
    const payload = {
      email,
      exp: new Date().getTime() + app.tokenTTL,
    }

    const token = createToken(payload, app.password)
    setResponseCookie(response, app.authTokenCookieName, token)

    app.logger.logInfo(`User "${email}" changed their password.`)
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

export { changePassword }
