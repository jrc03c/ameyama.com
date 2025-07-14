// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div
    @blur="onBlur"
    @focus="onFocus"
    @input="onInput"
    class="x-text-editor"
    contenteditable>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { debounce } from "../../utils/debounce.mjs"
import MarkdownIt from "markdown-it"

function removeExtraEmptyLines(raw) {
  const lines = raw.split("\n")
  const out = []

  for (let line of lines) {
    if (line.trim() === "") {
      if (out.length > 0 && out.at(-1).trim() !== "") {
        out.push(line)
      }
    } else {
      out.push(line)
    }
  }

  return out.join("\n").trim()
}

function render(x) {
  return new MarkdownIt({ html: true }).render(x)
}

const TextEditor = createVueComponentWithCSS({
  name: "x-text-editor",
  emits: ["edit"],
  template,

  props: {
    text: {
      type: String,
      required: true,
      default: () => "",
    },
  },

  data() {
    return {
      css,
      html: "",
      isEditing: false,
      lines: [],
    }
  },

  methods: {
    onBlur() {
      this.isEditing = false
      this.$el.innerHTML = render(this.$el.innerText)
    },

    onFocus() {
      this.isEditing = true
      this.$el.innerHTML = this.lines.join("<br>")
    },

    onInput() {
      const cleaned = removeExtraEmptyLines(this.$el.innerText)
      this.lines = cleaned.split("\n")
      this.$emit("edit", cleaned)
    },
  },

  mounted() {
    this.onInput = debounce(this.onInput, 100).bind(this)
    this.lines = this.text.split("\n")
    this.$el.innerHTML = render(this.text)
  },
})

export { TextEditor }
