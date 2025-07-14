import { getRequestBody } from "../../utils/get-request-body.mjs"
import { pause } from "@jrc03c/pause"
import { shortHash } from "../../utils/short-hash.mjs"
import { standardizeEmailAddress } from "../../utils/standardize-email-address.mjs"

async function read(request, response, app) {
  try {
    const body = await getRequestBody(request)
    let { depth, email, excluded } = body

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

    const { key } = body

    if (!key || typeof key !== "string") {
      await pause(app.badRequestTimeout)

      return response.status(400).send({
        message:
          "The request body must include a 'key' property with a string property representing a database key to read!",
      })
    }

    const hashedEmail = await shortHash(email)

    const value = app.database.readSync(
      "/db/" + hashedEmail + (key && key !== "/" ? "/" + key : ""),
      depth ?? Infinity,
      excluded ?? [],
    )

    return response.status(200).json(value)
  } catch (e) {
    app.logger.log(e, "error")
    await pause(app.badRequestTimeout)

    return response.status(500).send({
      message:
        "An unknown server-side error occurred. Please contact the server administrator for help.",
    })
  }
}

export { read }
