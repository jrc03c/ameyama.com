import { DummyMailer } from "./mailer-dummy.mjs"
import { GmailMailer } from "./mailer-gmail.mjs"
import { Mailer } from "./mailer.mjs"
import { MailerPayload } from "./mailer-payload.mjs"
import { MailerResponse } from "./mailer-response.mjs"

const classes = [
  DummyMailer,
  GmailMailer,
  Mailer,
  MailerPayload,
  MailerResponse,
]

classes.forEach(c => {
  Object.defineProperty(Mailer, c.name, {
    configurable: false,
    enumerable: true,
    writable: false,
    value: c,
  })
})

export { Mailer }
