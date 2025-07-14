import { makeKey } from "@jrc03c/make-key"

class Note {
  created = new Date()
  id = makeKey(8)
  modified = new Date()
  text = "..."
  title = "untitled"

  constructor(data) {
    data = data || {}
    this.created = data.created ? new Date(data.created) : this.created
    this.id = data.id || this.id
    this.modified = data.modified ? new Date(data.modified) : this.modified
    this.text = data.text || this.text
    this.title = data.title || this.title
  }
}

export { Note }
