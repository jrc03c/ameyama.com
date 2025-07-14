import { Mailer } from "./mailer.mjs"
import { MailerResponse } from "./mailer-response.mjs"

class DummyMailer extends Mailer {
  async send(payload) {
    try {
      console.log(payload)
      return new MailerResponse(true)
    } catch (e) {
      return new MailerResponse(false, e.toString())
    }
  }
}

export { DummyMailer }
