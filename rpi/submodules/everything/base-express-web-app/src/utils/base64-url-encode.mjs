import { urlEncode } from "./url-encode.mjs"

function base64URLEncode(x) {
  if (typeof x !== "string") {
    x = JSON.stringify(x)
  }

  return urlEncode(Buffer.from(x).toString("base64"))
}

export { base64URLEncode }
