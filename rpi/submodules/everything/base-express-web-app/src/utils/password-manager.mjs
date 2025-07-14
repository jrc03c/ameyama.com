// Handles:
// - Hashing & salting passwords
// - Checking passwords
// - Applying cooldowns

import { hash, randomString } from "@jrc03c/js-crypto-helpers"
import { pause } from "@jrc03c/pause"
import { shortHash } from "./short-hash.mjs"

class PasswordManager {
  db = null
  timeBetweenChecks = 3000

  constructor(data) {
    data = data || {}
    this.db = data.db || this.db
    this.timeBetweenChecks = data.timeBetweenChecks || this.timeBetweenChecks
  }

  async deleteAccount(email) {
    const emailHashed = await shortHash(email)
    this.db.writeSync(emailHashed, null)
    return this
  }

  async hasPassword(email) {
    const emailHashed = await shortHash(email)
    return !!this.db.readSync(emailHashed + "/password-hash")
  }

  async passwordIsCorrect(email, password) {
    // Basically, this just applies a cooldown every time a password is checked
    // if the check comes too soon after the last check (regardless of whether
    // or not the credentials are correct). But since password checks should be
    // relatively rare, the cooldown should only be triggered when someone
    // requires multiple checks in a short time period.
    const emailHashed = await shortHash(email)

    const lastCheckTime = new Date(
      this.db.readSync(emailHashed + "/last-check-time"),
    )

    while (new Date() - lastCheckTime < this.timeBetweenChecks) {
      await pause(500)
    }

    this.db.writeSync(
      emailHashed + "/last-check-time",
      new Date().toISOString(),
    )

    const hashTrue = this.db.readSync(emailHashed + "/password-hash")
    const salt = this.db.readSync(emailHashed + "/salt")
    const hashPred = await hash(password + salt)
    return hashPred === hashTrue
  }

  async setPassword(email, password) {
    const emailHashed = await shortHash(email)
    const salt = randomString(256)
    this.db.writeSync(emailHashed + "/salt", salt)

    this.db.writeSync(
      emailHashed + "/password-hash",
      await hash(password + salt),
    )

    this.db.writeSync(
      emailHashed + "/last-check-time",
      new Date(0).toISOString(),
    )

    return this
  }
}

export { PasswordManager }
