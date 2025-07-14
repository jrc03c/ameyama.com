import express from "express"
import fs from "node:fs"
import path from "node:path"

async function install(app, logger) {
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
  !(async () => {
    const { Logger } = await import("@jrc03c/logger")
    const app = express()
    const logger = new Logger({ path: "/tmp/logs.json" })
    await install(app, logger)

    app.listen(3000, () => {
      console.log("Listening on port 3000...")
    })
  })()
}
