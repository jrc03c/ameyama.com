import { makeKey } from "@jrc03c/make-key"

class Notification {
  classes = []
  id = makeKey(8)
  isDismissable = true
  text = ""
  time = new Date()
  ttl = Infinity

  constructor(data) {
    data = data || {}
    this.classes = data.classes || this.classes
    this.id = data.id || this.id
    this.isDismissable = data.isDismissable ?? this.isDismissable
    this.text = data.text || this.text
    this.time = data.time || this.time
    this.ttl = data.ttl ?? this.ttl
  }
}

export { Notification }
