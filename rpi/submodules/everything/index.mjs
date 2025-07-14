import { BaseExpressWebApp } from "./base-express-web-app/src/index.mjs"
import { FileDB } from "@jrc03c/filedb"
import { Mailer } from "./base-express-web-app/src/utils/mailer/mailer.mjs"
import express from "express"
import fs from "node:fs"
import helmet from "helmet"
import https from "node:https"
import path from "node:path"
import process from "node:process"

const privateDir = path.join(import.meta.dirname, "private")

if (!fs.existsSync(privateDir)) {
  fs.mkdirSync(privateDir, { recursive: true })
}

const base = new BaseExpressWebApp({
  database: new FileDB({ path: privateDir }),
  mailer: new Mailer(),
  name: "everything",
})

const relaxedApp = express()

relaxedApp.use(
  "/",
  express.static(path.join(import.meta.dirname, "public"), {
    extensions: ["html"],
  }),
)

// apply basic security measures
const secureApp = express()
secureApp.disable("x-powered-by")
secureApp.use(helmet())

secureApp.post("/authn/register", base.handlers.authentication.register)

secureApp.post(
  "/authn/verify-password",
  base.handlers.authentication.verifyPassword,
)

secureApp.post(
  "/authn/change-password",
  base.handlers.authentication.changePassword,
)

secureApp.post("/authn/sign-out", base.handlers.authentication.signOut)

secureApp.post(
  "/authn/delete-account",
  base.handlers.authentication.deleteAccount,
)

secureApp.post("/db/read", base.handlers.database.read)
secureApp.post("/db/write", base.handlers.database.write)

secureApp.post("/authn/is-signed-in", async (request, response) => {
  return response.send(await base.requestIsAuthorized(request))
})

const app = express()
app.use(relaxedApp)
app.use(secureApp)

if (process.argv.includes("--dev")) {
  const basePath = "/everything"
  const rootApp = express()
  rootApp.use(basePath, app)

  const sslConfig = {
    key: fs.readFileSync("localhost+2-key.pem"),
    cert: fs.readFileSync("localhost+2.pem"),
  }

  https.createServer(sslConfig, rootApp).listen(8443, () => {
    console.log("Listening on port 8443...")
  })
}

export { app }
