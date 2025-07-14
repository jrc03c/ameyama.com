// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-progress-bar {
    width: 100%;
    height: 1em;
    min-height: 1em;
    max-height: 1em;
    border-radius: 0.5em;
    background-color: var(--color-grey-2);
  }

  .x-progress-bar .x-progress-bar-value {
    height: 1em;
    min-height: 1em;
    max-height: 1em;
    border-radius: 0.5em;
    background-color: var(--color-red-7);
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-progress-bar">
    <div :style="computedStyle" class="x-progress-bar-value"></div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const ProgressBar = createVueComponentWithCSS({
  name: "x-progress-bar",

  props: {
    value: {
      type: Number,
      required: true,
      default: () => 0,
    },
  },

  template,

  data() {
    return {
      css,
    }
  },

  computed: {
    computedStyle() {
      return `
        width: ${this.value * 100}%;
        min-width: ${this.value * 100}%;
        max-width: ${this.value * 100}%;
      `
    },
  },
})

export { ProgressBar }
