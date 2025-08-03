import { Logger } from "@jrc03c/logger"
import express from "express"
import fs from "node:fs"
import path from "node:path"

function install(app, logger) {
  logger =
    logger ||
    (() => {
      const logFile = path.join(import.meta.dirname, "logs.json")

      if (!fs.existsSync(logFile)) {
        fs.writeFileSync(logFile, "", "utf8")
      }

      return new Logger({ path: logFile })
    })()

  const middleware = express()
  const maxAge = 1000 * 60 * 60 * 24 * 30 // 30 days
  const file = path.join(import.meta.dirname, "times.json")

  let times = fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file, "utf8"))
    : []

  middleware.use((request, response, next) => {
    try {
      times.push(new Date().getTime())
    } catch (e) {
      logger.logError(e)
    }

    return next()
  })

  middleware.get("/stats", (request, response) => {
    try {
      const template = fs.readFileSync(
        path.join(import.meta.dirname, "index.html"),
        "utf8",
      )

      const out = template.replace(
        "const times = []",
        `const times = ${JSON.stringify(times)}`,
      )

      return response.send(out)
    } catch (e) {
      logger.logError(e)
      return response.status(500).send("Uh-oh! A server-side error occurred!")
    }
  })

  setInterval(() => {
    times = times.filter(t => new Date() - t < maxAge)
    fs.writeFileSync(file, JSON.stringify(times, null, 2), "utf8")
  }, 1000 * 60)

  app.use(middleware)
  return middleware
}

export { install }

if (import.meta.url.includes(process.argv[1])) {
  const app = express()
  install(app)

  app.listen(3000, () => {
    console.log("Listening on port 3000...")
  })
}
