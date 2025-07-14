import { app as everything } from "./submodules/everything/index.mjs"
import { install as installStaticMiddleware } from "./submodules/static/index.mjs"
import { install as installStatsMiddleware } from "./submodules/stats/index.mjs"
import { Logger } from "@jrc03c/logger"
import express from "express"
import path from "node:path"

!(async () => {
  const app = express()
  const logger = new Logger({ path: "logs.json" })
  const legit = ["jrc03c@pm.me"]

  await installStatsMiddleware(app, logger)
  await installStaticMiddleware(app, logger)

  app.use(
    "/donsol",
    express.static(path.join(import.meta.dirname, "submodules", "donsol"), {
      extensions: ["html"],
    }),
  )

  app.use(
    "/everything",
    express.json(),
    (request, response, next) => {
      if (
        request.body &&
        request.body.email &&
        !legit.includes(request.body.email)
      ) {
        return response.status(401).send({ message: "Unauthorized." })
      }

      return next()
    },
    everything,
  )

  app.listen(3000, () => {
    console.log("Listening on port 3000...")
  })
})()
