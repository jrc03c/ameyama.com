import EmailValidator from "@jrc03c/email-validator"

class EmailValidatorWithCaching extends EmailValidator {
  db = null
  dbKey = "/email-validator-cache/top-level-domain-list"

  constructor(db, dbKey) {
    super()
    this.db = db
    this.dbKey = dbKey || this.dbKey
  }

  async fetchTopLevelDomainList(url) {
    const cachedTlds = this.db.readSync(this.dbKey)

    if (cachedTlds) {
      this.topLevelDomainList = cachedTlds
    } else {
      await super.fetchTopLevelDomainList(url)
      this.db.writeSync(this.dbKey, this.topLevelDomainList)
    }

    return this.topLevelDomainList
  }

  clearCache() {
    this.db.writeSync(this.dbKey, null)
    return this
  }
}

export { EmailValidatorWithCaching }
