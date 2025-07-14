import { MailerResponse } from "./mailer-response.mjs"

class Mailer {
  async send() {
    return new MailerResponse(true)
  }
}

export { Mailer }
