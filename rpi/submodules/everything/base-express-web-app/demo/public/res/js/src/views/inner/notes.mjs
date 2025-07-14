// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-notes-view">
    <div class="field">
      <div class="control">
        <textarea
          :disabled="isWorking"
          class="textarea"
          placeholder="Write a note here!"
          v-model="notes"></textarea>
      </div>
    </div>

    <div
      :class="{ [message.class]: true }"
      class="is-light notification"
      v-if="message.text">
      <button @click="message.text = ''" class="delete"></button>
      {{ message.text }}
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

function debounce(fn, ms) {
  let timeout

  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...arguments), ms)
  }
}

const NotesView = createVueComponentWithCSS({
  name: "x-notes-view",
  template,

  data() {
    return {
      css,
      isWorking: false,
      message: {
        class: "",
        text: "",
        timeout: null,
      },
      notes: "",
      shouldSave: true,
    }
  },

  watch: {
    notes() {
      this.save()
    },
  },

  methods: {
    async save() {
      if (!this.shouldSave) {
        return
      }

      if (this.isWorking) {
        return
      }

      if (!this.notes.trim()) {
        return
      }

      this.isWorking = true
      this.message.class = ""
      this.message.text = "Saving..."
      clearTimeout(this.message.timeout)

      const response = await fetch("/db/write", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.$store.state.email,
          key: "/notes",
          value: this.notes,
        }),
      })

      if (response.status === 200) {
        this.message.class = "is-success"
        this.message.text = "Saved!"

        this.message.timeout = setTimeout(() => {
          this.message.text = ""
        }, 2000)
      } else {
        this.message.class = "is-danger"

        this.message.text = `${response.status}: ${(await response.json()).message}`
      }

      this.isWorking = false
    },
  },

  async mounted() {
    this.save = debounce(this.save, 1000).bind(this)

    this.shouldSave = false
    this.isWorking = true
    this.message.class = ""
    this.message.text = "Loading..."
    clearTimeout(this.message.timeout)

    const response = await fetch("/db/read", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.$store.state.email,
        key: "/notes",
      }),
    })

    if (response.status === 200) {
      this.message.class = ""
      this.message.text = ""
      this.notes = await response.json()
    } else {
      this.message.class = "is-danger"

      this.message.text = `${response.status}: ${(await response.json()).message}`
    }

    this.isWorking = false

    setTimeout(() => {
      this.shouldSave = true
    }, 1500)
  },
})

export { NotesView }
