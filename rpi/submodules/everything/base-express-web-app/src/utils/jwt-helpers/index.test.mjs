import { createToken, decodeTokenPayload, tokenIsValid } from "./index.mjs"
import { expect, test } from "@jrc03c/fake-jest"
import { isEqual } from "@jrc03c/js-math-tools"

test("tests that the JWT helper functions work as expected", () => {
  const tokenTrue =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"

  const payloadTrue = {
    sub: "1234567890",
    name: "John Doe",
    admin: true,
    iat: 1516239022,
  }

  const secret = "a-string-secret-at-least-256-bits-long"
  const tokenPred = createToken(payloadTrue, secret)
  expect(tokenPred).toBe(tokenTrue)

  const payloadPred = decodeTokenPayload(tokenPred)
  expect(isEqual(payloadPred, payloadTrue)).toBe(true)

  expect(tokenIsValid(tokenPred, secret)).toBe(true)
})
