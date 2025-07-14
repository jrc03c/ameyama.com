// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-how-to-play-view">
    <h1>
      <router-link to="/">
        donsol
      </router-link>
    </h1>

    <div class="x-how-to-play-view-content">
      <div>
        visit these links to learn how to play:
      </div>

      <br>

      <div>
        <a
          href="https://hundredrabbits.itch.io/donsol"
          rel="noopener,noreferrer"
          target="_blank">
          donsol @ itch.io
        </a>
      </div>

      <div>
        <a
          href="https://100r.co/site/donsol.html"
          rel="noopener,noreferrer"
          target="_blank">
          donsol @ 100r.co
        </a>
      </div>
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

const HowToPlayView = createVueComponentWithCSS({
  name: "x-how-to-play-view",
  template,

  data() {
    return {
      css,
    }
  },
})

export { HowToPlayView }
