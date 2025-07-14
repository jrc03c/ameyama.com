class Fetcher {
  email = null
  router = null

  constructor(data) {
    data = data || {}
    this.email = data.email || this.email
    this.router = data.router || this.router
  }

  async post(path, payload) {
    try {
      payload = payload || {}

      payload = {
        ...payload,
        email: payload.email || this.email,
      }

      const basePath = new URL(window.location.href).pathname

      if (!path.startsWith(basePath)) {
        path =
          "/" +
          basePath
            .split("/")
            .map(v => v.trim())
            .filter(v => !!v) +
          (path.startsWith("/") ? "" : "/") +
          path
      }

      const response = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const raw = await response.text()

      const data = (() => {
        try {
          return JSON.parse(raw)
        } catch (e) {
          return raw
        }
      })()

      if (response.status === 200) {
        return { status: 200, data }
      } else {
        return {
          status: response.status,
          message: (data.message || raw).toLowerCase(),
        }
      }
    } catch (e) {
      return {
        status: 404,
        message:
          "either the server is down or the resource you requested wasn't found!",
      }
    }
  }
}

export { Fetcher }
