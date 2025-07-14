// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-about-view">
    <h1>
      <router-link to="/">
        donsol
      </router-link>
    </h1>

    <div class="x-about-view-content" ref="content">
      this game was designed by

      <a
        href="https://johneternal.com/"
        rel="noopener,noreferrer"
        target="_blank">
        john eternal
      </a>

      and originally implemented by

      <a
        href="https://hundredrabbits.itch.io/donsol"
        rel="noopener,noreferrer"
        target="_blank">
        100r
      </a>.

      <a
        href="https://ameyama.com"
        rel="noopener,noreferrer"
        target="_blank">
        josh
      </a>

      created this specific implementation.
    </div>

    <br>

    <div>
      <button @click="$router.push('/').catch(() => {})">
        back to menu
      </button>
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const AboutView = createVueComponentWithCSS({
  name: "x-about-view",
  template,

  data() {
    return {
      css,
    }
  },

  mounted() {
    Array.from(this.$refs.content.querySelectorAll("a")).forEach(a => {
      a.innerHTML = a.innerHTML.trim()
    })
  },
})

export { AboutView }
