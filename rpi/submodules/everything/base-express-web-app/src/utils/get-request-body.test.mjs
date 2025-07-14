import { expect, test } from "@jrc03c/fake-jest"
import { isEqual } from "@jrc03c/js-math-tools"
import { getRequestBody } from "./get-request-body.mjs"
import express from "express"

test("tests that the `getRequestBody` function works as expected", () => {
  const app = express()
  const bodyTrue = { hello: "world", a: { b: { c: [1, 2, 3] } } }

  app.post("/foo", async (request, response) => {
    const bodyPred = await getRequestBody(request)
    expect(isEqual(bodyPred, bodyTrue)).toBe(true)
    return response.send()
  })

  const server = app.listen(3000, async () => {
    const response = await fetch("http://localhost:3000/foo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyTrue),
    })

    expect(response.status).toBe(200)
    server.close()
  })
})
