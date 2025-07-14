class MailerPayload {
  #html = null
  from = null
  subject = null
  text = null
  to = null

  constructor(data) {
    data = data || {}
    this.from = data.from
    this.html = data.html
    this.subject = data.subject
    this.text = data.text
    this.to = data.to
  }

  get html() {
    return this.#html ? this.#html : this.text
  }

  set html(value) {
    this.#html = value
  }
}

export { MailerPayload }
