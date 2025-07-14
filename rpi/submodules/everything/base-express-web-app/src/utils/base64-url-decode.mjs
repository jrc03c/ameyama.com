function base64URLDecode(x) {
  x = x.replaceAll(/-/g, "+").replaceAll(/_/g, "/")
  x += "=".repeat(x.length % 4)
  const out = Buffer.from(x, "base64").toString()

  try {
    return JSON.parse(out)
  } catch (e) {
    return out
  }
}

export { base64URLDecode }
