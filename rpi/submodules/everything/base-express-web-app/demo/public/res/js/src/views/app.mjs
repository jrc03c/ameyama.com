// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <section class="section x-app-view">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const AppView = createVueComponentWithCSS({
  name: "x-app-view",
  template,

  data() {
    return {
      css,
    }
  },
})

export { AppView }
