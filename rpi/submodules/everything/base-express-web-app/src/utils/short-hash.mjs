import { hash } from "@jrc03c/js-crypto-helpers"

async function shortHash(x, n) {
  n = n || 16
  return (await hash(x)).slice(0, n)
}

export { shortHash }
