import * as fsx from "@jrc03c/fs-extras"
import express from "express"
import path from "node:path"

!(async () => {
  const app = express()

  const scripts = fsx.findSync(path.join(import.meta.dirname, "api"), f =>
    f.endsWith(".mjs"),
  )

  for (const script of scripts) {
    const handler = (await import(script)).default

    app.use(
      script.replace(import.meta.dirname, "").replace(/\.mjs$/g, ""),
      handler,
    )
  }

  app.use(
    "/",
    express.static(path.join(import.meta.dirname, "dist"), {
      extensions: ["html"],
    }),
  )

  app.listen(3000, () => {
    console.log("Listening on port 3000...")
  })
})()
