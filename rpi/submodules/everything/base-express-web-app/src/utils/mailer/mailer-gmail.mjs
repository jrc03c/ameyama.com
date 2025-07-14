import { Mailer } from "./mailer.mjs"
import { MailerResponse } from "./mailer-response.mjs"
import nodemailer from "nodemailer"

class GmailMailer extends Mailer {
  transport = null

  constructor(user, pass) {
    super()

    this.transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    })
  }

  async send(payload) {
    try {
      await this.transport.sendMail(payload)
      return new MailerResponse(true)
    } catch (e) {
      return new MailerResponse(false, e.toString())
    }
  }
}

export { GmailMailer }
