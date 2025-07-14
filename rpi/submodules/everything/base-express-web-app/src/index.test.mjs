import { afterAll, expect, test } from "@jrc03c/fake-jest"
import { base64URLEncode } from "./utils/base64-url-encode.mjs"
import { BaseExpressWebApp } from "./index.mjs"
import { FileDB } from "@jrc03c/filedb"
import { isEqual } from "@jrc03c/js-math-tools"
import { Mailer } from "./utils/mailer/mailer.mjs"
import { MailerResponse } from "./utils/mailer/mailer-response.mjs"
import { randomString } from "@jrc03c/js-crypto-helpers"
import { shortHash } from "./utils/short-hash.mjs"
import { createToken, sign } from "./utils/jwt-helpers/index.mjs"
import { standardizeEmailAddress } from "./utils/standardize-email-address.mjs"
import express from "express"
import fs from "node:fs"
import path from "node:path"

class TestMailer extends Mailer {
  otp = null

  async send(payload) {
    this.otp = payload.text.split(":").at(-1).trim()
    return new MailerResponse(true)
  }
}

const dirs = []
const servers = []

afterAll(() => {
  dirs.forEach(d => fs.rmSync(d, { force: true, recursive: true }))
  servers.forEach(s => s.close())
})

test("tests that the `BaseExpressWebApp` class works as expected", () => {
  return new Promise((resolve, reject) => {
    try {
      const dir = path.join(import.meta.dirname, "..", "temp", randomString(8))
      dirs.push(dir)

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }

      const base = new BaseExpressWebApp({
        badRequestTimeout: 500,
        database: new FileDB({ path: dir }),
        mailer: new TestMailer(),
      })

      base.logger.shouldWriteToStdout = false

      const app = express()

      app.post("/authn/register", base.handlers.authentication.register)

      app.post(
        "/authn/verify-password",
        base.handlers.authentication.verifyPassword,
      )

      app.post(
        "/authn/change-password",
        base.handlers.authentication.changePassword,
      )

      app.post(
        "/authn/send-otp-email",
        base.handlers.authentication.sendOTPEmail,
      )

      app.post("/authn/verify-otp", base.handlers.authentication.verifyOTP)

      app.post("/authn/is-authorized", async (request, response) => {
        return response.send(await base.requestIsAuthorized(request))
      })

      app.post("/authn/sign-out", base.handlers.authentication.signOut)

      app.post(
        "/authn/delete-account",
        base.handlers.authentication.deleteAccount,
      )

      app.post("/db/read", base.handlers.database.read)
      app.post("/db/write", base.handlers.database.write)

      const server = app.listen(0, async () => {
        const { port } = server.address()

        const emails = [
          standardizeEmailAddress(`otp+${randomString(8)}@example.com`),
          standardizeEmailAddress(`password+${randomString(8)}@example.com`),
        ]

        for (const email of emails) {
          let token
          const password = randomString(32)

          // confirm that sending an otp email request works as expected
          if (email.startsWith("otp+")) {
            await (async () => {
              expect(base.mailer.otp).toBe(null)

              const response = await fetch(
                `http://localhost:${port}/authn/send-otp-email`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email }),
                },
              )

              expect(response.status).toBe(200)
              expect(typeof base.mailer.otp).toBe("string")
              expect(base.mailer.otp.length).toBe(base.otpLength)
            })()

            // confirm that verifying the otp works as expected
            await (async () => {
              const response = await fetch(
                `http://localhost:${port}/authn/verify-otp`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, otp: base.mailer.otp }),
                },
              )

              expect(response.status).toBe(200)
              const cookie = response.headers.get("set-cookie")
              expect(typeof cookie).toBe("string")
              expect(cookie.includes(base.authTokenCookieName + "=")).toBe(true)

              token = cookie
                .split(";")
                .find(v => v.includes(base.authTokenCookieName + "="))
                .trim()

              expect(token.length).toBeGreaterThan(0)
            })()
          }

          if (email.startsWith("password+")) {
            // confirm that registering and then logging in with a password
            // works as expected
            await (async () => {
              const response = await fetch(
                `http://localhost:${port}/authn/register`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email,
                    password,
                  }),
                },
              )

              expect(response.status).toBe(200)
              const cookie = response.headers.get("set-cookie")
              expect(typeof cookie).toBe("string")
              expect(cookie.includes(base.authTokenCookieName + "=")).toBe(true)

              token = cookie
                .split(";")
                .find(v => v.includes(base.authTokenCookieName + "="))
                .trim()

              expect(token.length).toBeGreaterThan(0)
            })()

            await (async () => {
              const response = await fetch(
                `http://localhost:${port}/authn/sign-out`,
                {
                  method: "POST",
                  headers: {
                    Cookie: token,
                  },
                },
              )

              expect(response.status).toBe(200)
              const cookie = response.headers.get("set-cookie")
              expect(typeof cookie).toBe("string")
              expect(cookie.includes(base.authTokenCookieName + "=")).toBe(true)

              token = cookie
                .split(";")
                .find(v => v.includes(base.authTokenCookieName + "="))
                .trim()

              expect(token.length).toBe(base.authTokenCookieName.length + 1)
            })()

            await (async () => {
              const response = await fetch(
                `http://localhost:${port}/authn/verify-password`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email,
                    password,
                  }),
                },
              )

              expect(response.status).toBe(200)
              const cookie = response.headers.get("set-cookie")
              expect(typeof cookie).toBe("string")
              expect(cookie.includes(base.authTokenCookieName + "=")).toBe(true)

              token = cookie
                .split(";")
                .find(v => v.includes(base.authTokenCookieName + "="))
                .trim()

              expect(token.length).toBeGreaterThan(0)
            })()
          }

          // confirm that requests are correctly determined to be authorized or
          // not
          await (async () => {
            const response = await fetch(
              `http://localhost:${port}/authn/is-authorized`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              },
            )

            expect(response.status).toBe(200)
            expect(await response.json()).toBe(false)
          })()

          await (async () => {
            const response = await fetch(
              `http://localhost:${port}/authn/is-authorized`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Cookie: token,
                },
                body: JSON.stringify({ email }),
              },
            )

            expect(response.status).toBe(200)
            expect(await response.json()).toBe(true)
          })()

          // confirm that data cannot be written to or read from the database
          // when not authorized and that accounts cannot be deleted via
          // unauthorized requests; also confirm that a timeout imposed on
          // unauthorized requests
          const key = "/my/data"
          const myDataTrue = { x: Math.random(), y: Math.random() }
          const tokenParts = token.split(".")

          const tamperedToken = tokenParts
            .slice(0, 2)
            .concat([sign(tokenParts.slice(0, 2).join("."), randomString(32))])
            .join(".")

          const oldToken = createToken({ email, exp: 0 }, base.password)

          const unauths = [
            { endpoint: "/db/write", token: null },
            { endpoint: "/db/read", token: null },
            { endpoint: "/authn/delete-account", token: null },
            { endpoint: "/db/write", token: tamperedToken },
            { endpoint: "/db/read", token: tamperedToken },
            { endpoint: "/authn/delete-account", token: tamperedToken },
            { endpoint: "/db/write", token: oldToken },
            { endpoint: "/db/read", token: oldToken },
            { endpoint: "/authn/delete-account", token: oldToken },
          ]

          for (const unauth of unauths) {
            await (async () => {
              const start = performance.now()

              const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email,
                  key,
                  value: myDataTrue,
                }),
              }

              if (unauth.token) {
                options.headers["Cookie"] = base64URLEncode(unauth.token)
              }

              const response = await fetch(
                `http://localhost:${port}${unauth.endpoint}`,
                options,
              )

              expect(response.status).toBe(401)

              expect(performance.now() - start).toBeGreaterThanOrEqualTo(
                base.badRequestTimeout * 0.95,
              )
            })()
          }

          // confirm that data can be written to and read from the database when
          // authorized
          await (async () => {
            const response = await fetch(`http://localhost:${port}/db/write`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Cookie: token,
              },
              body: JSON.stringify({
                email,
                key,
                value: myDataTrue,
              }),
            })

            expect(response.status).toBe(200)
          })()

          await (async () => {
            const response = await fetch(`http://localhost:${port}/db/read`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Cookie: token,
              },
              body: JSON.stringify({
                email,
                key,
              }),
            })

            const myDataPred = await response.json()
            expect(response.status).toBe(200)
            expect(isEqual(myDataPred, myDataTrue)).toBe(true)
          })()

          // confirm that accounts can be deleted when authorized
          await (async () => {
            const hashedEmail = await shortHash(email)
            expect(base.database.readSync(`/db/${hashedEmail}`)).not.toBe(null)

            const response = await fetch(
              `http://localhost:${port}/authn/delete-account`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Cookie: token,
                },
                body: JSON.stringify({
                  email,
                }),
              },
            )

            expect(response.status).toBe(200)
            expect(base.database.readSync(`/authn/${hashedEmail}`)).toBe(null)
            expect(base.database.readSync(`/db/${hashedEmail}`)).toBe(null)
          })()
        }

        resolve()
      })

      servers.push(server)
    } catch (e) {
      return reject(e)
    }
  })
})
