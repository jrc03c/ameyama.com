class MailerResponse {
  wasSent = false
  message = undefined

  constructor(wasSent, message) {
    this.wasSent = wasSent
    this.message = message
  }
}

export { MailerResponse }
