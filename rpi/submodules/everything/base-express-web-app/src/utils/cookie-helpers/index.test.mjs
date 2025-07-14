import { afterAll, expect, test } from "@jrc03c/fake-jest"
import { createToken } from "../jwt-helpers/index.mjs"

import {
  getRequestCookie,
  getRequestCookies,
  setResponseCookie,
} from "./index.mjs"

import { isEqual } from "@jrc03c/js-math-tools"
import { randomString } from "@jrc03c/js-crypto-helpers"
import express from "express"

const servers = []

afterAll(() => {
  servers.forEach(s => {
    try {
      s.close()
    } catch (e) {}
  })
})

test("tests that the cookie helper functions work as expected", () => {
  return new Promise((resolve, reject) => {
    try {
      const password = randomString(32)
      const obj = { x: Math.random(), y: Math.random(), abc: [1, 2, 3] }
      const values = [obj, createToken(obj, password)]
      let isWorking = false

      const interval = setInterval(async () => {
        if (isWorking) {
          return
        }

        if (values.length === 0) {
          clearInterval(interval)
          return resolve()
        }

        isWorking = true
        const app = express()
        const key = "foo"
        const value = values.shift()

        app.post("/set-cookie", async (request, response) => {
          setResponseCookie(response, key, value)
          return response.send()
        })

        app.post("/check-cookies-all", async (request, response) => {
          const cookies = await getRequestCookies(request)
          expect(isEqual(cookies, { [key]: value })).toBe(true)
          return response.send()
        })

        app.post("/check-cookie-singular", async (request, response) => {
          const valuePred = await getRequestCookie(request, key)
          expect(isEqual(valuePred, value)).toBe(true)
          return response.send()
        })

        const server = app.listen(0, async () => {
          const { port } = server.address()
          let cookie

          // set the cookie
          await (async () => {
            const response = await fetch(
              `http://localhost:${port}/set-cookie`,
              {
                method: "POST",
              },
            )

            expect(response.status).toBe(200)

            cookie = response.headers
              .get("set-cookie")
              .split(";")
              .find(v => v.includes(key + "="))
              .trim()
          })()

          // check the cookie
          const endpoints = ["/check-cookies-all", "/check-cookie-singular"]

          for (const endpoint of endpoints) {
            await (async () => {
              const response = await fetch(
                `http://localhost:${port}${endpoint}`,
                {
                  method: "POST",
                  headers: { Cookie: cookie },
                },
              )

              expect(response.status).toBe(200)
            })()
          }

          isWorking = false
          server.close()
        })

        servers.push(server)
      }, 100)
    } catch (e) {
      return reject(e)
    }
  })
})
