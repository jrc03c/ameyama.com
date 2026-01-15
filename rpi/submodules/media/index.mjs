import express from "express"
import fs from "node:fs"
import path from "node:path"
import serveIndex from "serve-index"

function install(app) {
  const dir = path.join(import.meta.dirname, "files")

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  app.use(
    "/media",
    express.static(dir, { extensions: ["html"] }),
    serveIndex(dir, { icons: true }),
  )

  return app
}

export { install }
