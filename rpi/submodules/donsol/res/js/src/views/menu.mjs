// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-menu-view {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: var(--spacing-sm);
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-menu-view">
    <h1>
      <router-link to="/">
        donsol
      </router-link>
    </h1>

    <div>
      <button @click="goTo('/game')">
        play
      </button>
    </div>

    <div>
      <button @click="goTo('/how-to-play')">
        how to play
      </button>
    </div>

    <div>
      <button @click="goTo('/about')">
        about
      </button>
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const MenuView = createVueComponentWithCSS({
  name: "x-menu-view",
  template,

  data() {
    return {
      css,
    }
  },

  methods: {
    goTo(path) {
      this.$router.push(path).catch(() => {})
    },
  },
})

export { MenuView }
