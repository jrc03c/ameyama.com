// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-app-view {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
    gap: 0;
  }

  .x-app-view .navbar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    gap: var(--padding);
    padding: var(--padding);
    background-color: rgba(255, 0, 0, 0.15);
  }

  .x-game-view {
    height: 100%;
    flex-shrink: 999999;
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-app-view">
    <div class="navbar">
      <button @click="startNewGame">
        new game
      </button>
    </div>

    <x-game-view></x-game-view>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { GameView } from "./game.mjs"

const AppView = createVueComponentWithCSS({
  name: "x-app-view",

  components: {
    "x-game-view": GameView,
  },

  template,

  data() {
    return {
      css,
    }
  },

  methods: {
    startNewGame() {
      localStorage.clear()
      window.location.reload()
    },
  },
})

export { AppView }
