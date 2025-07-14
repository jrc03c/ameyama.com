// NOTE: Because this is just going to be used internally, I'm hard-coding the
// header (and therefore the hashing algorithm, SHA-256).

import { base64URLDecode } from "../base64-url-decode.mjs"
import { base64URLEncode } from "../base64-url-encode.mjs"
import { urlEncode } from "../url-encode.mjs"
import crypto from "node:crypto"

const HEADER = {
  alg: "HS256",
  typ: "JWT",
}

function createToken(payload, secret) {
  const h = base64URLEncode(JSON.stringify(HEADER))
  const p = base64URLEncode(JSON.stringify(payload))
  const s = sign(h + "." + p, secret)
  return [h, p, s].join(".")
}

function decodeTokenPayload(token) {
  const out = base64URLDecode(token.split(".")[1])

  try {
    return JSON.parse(out)
  } catch (e) {
    return out
  }
}

function sign(value, secret) {
  return urlEncode(
    crypto
      .createHmac("sha256", secret, {
        encoding: "utf8",
      })
      .update(value)
      .digest("base64"),
  )
}

function tokenIsValid(token, secret) {
  const parts = token.split(".")
  const headerAndToken = parts.slice(0, 2).join(".")
  const sigPred = parts[2]
  const sigTrue = sign(headerAndToken, secret)
  return sigPred === sigTrue
}

export { createToken, decodeTokenPayload, sign, tokenIsValid }
