import { decodeTokenPayload } from "../../utils/jwt-helpers/index.mjs"

import {
  getRequestCookie,
  setResponseCookie,
} from "../../utils/cookie-helpers/index.mjs"

import { pause } from "@jrc03c/pause"

async function signOut(request, response, app) {
  try {
    try {
      const token = await getRequestCookie(request, app.authTokenCookieName)
      const { email } = decodeTokenPayload(token)
      app.logger.logInfo(`User "${email}" signed out.`)
    } catch (e) {}

    setResponseCookie(response, app.authTokenCookieName, "")
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

export { signOut }
