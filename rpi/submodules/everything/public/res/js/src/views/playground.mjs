// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-playground-view {
    padding: var(--spacing);
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-playground-view">
    ...
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const PlaygroundView = createVueComponentWithCSS({
  name: "x-playground-view",

  template,

  data() {
    return {
      css,
    }
  },
})

export { PlaygroundView }
