import express from "express"

function getRequestBody(request) {
  return new Promise((resolve, reject) => {
    try {
      const parser = express.json()

      return parser(request, null, () => {
        return resolve(request.body)
      })
    } catch (e) {
      return reject(e)
    }
  })
}

export { getRequestBody }
