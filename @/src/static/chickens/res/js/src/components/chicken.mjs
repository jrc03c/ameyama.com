// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-chicken,
  .x-chicken img {
    max-width: 100%;
    max-height: 100%;
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-chicken">
    <img :src="src" v-if="type">
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const Chicken = createVueComponentWithCSS({
  name: "x-chicken",
  template,

  props: {
    type: {
      type: String,
      required: true,
      default: () => "",
    },
  },

  data() {
    return {
      css,
    }
  },

  computed: {
    src() {
      return `res/img/chicken-${this.type.toLowerCase()}.png`
    },
  },
})

export { Chicken }
