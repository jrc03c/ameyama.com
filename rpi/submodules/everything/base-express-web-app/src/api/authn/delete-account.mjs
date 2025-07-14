import { getRequestBody } from "../../utils/get-request-body.mjs"
import { pause } from "@jrc03c/pause"
import { setResponseCookie } from "../../utils/cookie-helpers/index.mjs"
import { shortHash } from "../../utils/short-hash.mjs"
import { standardizeEmailAddress } from "../../utils/standardize-email-address.mjs"

async function deleteAccount(request, response, app) {
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

    const hashedEmail = await shortHash(email)
    app.database.writeSync("/authn/" + hashedEmail, null)
    app.database.writeSync("/db/" + hashedEmail, null)
    await app.passwordManager.deleteAccount(email)

    setResponseCookie(response, app.authTokenCookieName, "")

    app.logger.logInfo(`User "${email}" deleted their account.`)
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

export { deleteAccount }
