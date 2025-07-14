// NOTE: Do not include sensitive information in cookies! These tools do not
// encrypt cookie data!

import { base64URLDecode } from "../base64-url-decode.mjs"
import { base64URLEncode } from "../base64-url-encode.mjs"
import cookieParser from "cookie-parser"

async function getRequestCookie(request, key) {
  return (await getRequestCookies(request))[key]
}

function getRequestCookies(request) {
  return new Promise((resolve, reject) => {
    try {
      const parser = cookieParser()

      return parser(request, null, () => {
        const out = request.cookies

        Object.keys(out).forEach(key => {
          try {
            out[key] = base64URLDecode(out[key])
          } catch (e) {}
        })

        return resolve(out)
      })
    } catch (e) {
      return reject(e)
    }
  })
}

function setResponseCookie(response, key, value, options) {
  options = options || {
    httpOnly: true,
    secure: true,
    sameSite: true,
  }

  response.cookie(key, base64URLEncode(value), options)
  return response
}

export { getRequestCookie, getRequestCookies, setResponseCookie }
