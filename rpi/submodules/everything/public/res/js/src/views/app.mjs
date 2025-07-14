// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-app-view {
    padding-bottom: var(--spacing);
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-app-view">
    <x-nav-view></x-nav-view>
    <router-view></router-view>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { NavView } from "./inner/nav.mjs"

const AppView = createVueComponentWithCSS({
  name: "x-app-view",
  template,

  components: {
    "x-nav-view": NavView,
  },

  data() {
    return {
      css,
    }
  },

  mounted() {
    if (this.$router.currentRoute._value.fullPath.endsWith("/app")) {
      this.$router.push("/app/notes").catch(() => {})
    }
  },
})

export { AppView }
