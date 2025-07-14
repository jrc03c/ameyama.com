function urlEncode(x) {
  return x.replaceAll(/\+/g, "-").replaceAll(/\//g, "_").replaceAll(/=/g, "")
}

export { urlEncode }
