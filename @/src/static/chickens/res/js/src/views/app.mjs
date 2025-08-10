// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  button {
    padding: calc(var(--spacing) / 3) calc(var(--spacing) / 2);
    border: 0;
    border-radius: var(--border-radius);
    background-color: rgb(235, 235, 235);
    cursor: pointer;
  }

  button:hover {
    filter: brightness(105%);
  }

  button:active {
    filter: brightness(90%);
  }

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
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: var(--spacing);
  }

  .x-app-view > .container {
    aspect-ratio: 6 / 9;
    border-radius: var(--border-radius);
  }

  .x-app-view > .container > .counter-container {
    height: calc(100% / 9);
    min-height: calc(100% / 9);
    max-height: calc(100% / 9);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    gap: 0;
    color: white;
    font-size: 1.5em;
  }

  .x-app-view > .container > .candidates-container {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: calc(100% / 4.5);
    min-height: calc(100% / 4.5);
    max-height: calc(100% / 4.5);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 0;
  }

  .x-app-view > .container > .end-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.67);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: var(--spacing);
    color: white;
    font-size: 2em;
  }

  .x-app-view > .container > .end-modal button {
    font-size: 2rem;
  }

  @media (aspect-ratio < 6 / 9) {
    .x-app-view > .container {
      width: calc(100vw - calc(2 * var(--spacing)));
      min-width: calc(100vw - calc(2 * var(--spacing)));
      max-width: calc(100vw - calc(2 * var(--spacing)));
    }

    .x-app-view > .container > .counter-container {
      font-size: 5vw;
    }
  }

  @media (aspect-ratio >= 6 / 9) {
    .x-app-view > .container {
      height: calc(100vh - calc(2 * var(--spacing)));
      min-height: calc(100vh - calc(2 * var(--spacing)));
      max-height: calc(100vh - calc(2 * var(--spacing)));
    }

    .x-app-view > .container > .counter-container {
      font-size: 3vh;
    }
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-app-view" v-if="game">
    <div class="container" ref="container">
      <div class="end-modal" v-if="game.state !== Game.State.PLAY">
        <div v-if="game.state === Game.State.WIN">
          You won! 🎉
        </div>

        <div v-if="game.state === Game.State.LOSE">
          You lost. 😢
        </div>

        <div>
          <button @click="startNewGame">
            New game
          </button>
        </div>
      </div>

      <div class="counter-container">
        <div>
          <b>Remaining:</b> {{ game.chickenCount }}
        </div>

        <div>
          <button @click="startNewGame">
            New game
          </button>
        </div>
      </div>

      <x-grid-view
        :grid="game.grid"
        :indices-to-highlight="indicesToHighlight">
      </x-grid-view>

      <div class="candidates-container">
        <x-candidates-view
          :candidates="game.candidates"
          @drag="onCandidatesDrag"
          @drag-start="onCandidatesDragStart"
          @drag-end="onCandidatesDragEnd"
          ref="candidatesView">
        </x-candidates-view>
      </div>
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { CandidatesView } from "./candidates.mjs"
import { Chicken } from "../model/chicken.mjs"
import { clamp } from "@jrc03c/js-math-tools"
import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { Game } from "../model/game.mjs"
import { GridView } from "./grid.mjs"

const AppView = createVueComponentWithCSS({
  name: "x-app-view",

  components: {
    "x-candidates-view": CandidatesView,
    "x-grid-view": GridView,
  },

  template,

  data() {
    return {
      candidatesAreBeingDragged: false,
      css,
      game: null,
      Game,
      indicesToHighlight: [],
    }
  },

  methods: {
    onCandidatesDrag() {
      if (this.candidatesAreBeingDragged) {
        this.indicesToHighlight = []

        const contRect = this.$refs.container.getBoundingClientRect()
        const blockSize = contRect.width / 6
        const candRect = this.$refs.candidatesView.$el.getBoundingClientRect()

        if (this.game.candidates.orientation === Game.Orientation.HORIZONTAL) {
          const i = Math.round((candRect.y - contRect.y) / blockSize) - 1
          const j = clamp(Math.round((candRect.x - contRect.x) / blockSize), 0, 4)
          this.indicesToHighlight = [[i, j], [i, j + 1]]
        } else {
          const i = Math.round((candRect.y - contRect.y) / blockSize) - 1
          const j = clamp(Math.round((candRect.x - contRect.x) / blockSize), 0, 5)
          this.indicesToHighlight = [[i, j], [i + 1, j]]
        }

        if (!this.indicesToHighlight.every(v => {
          try {
            return !this.game.grid[v[0]][v[1]]
          } catch(e) {
            return false
          }
        })) {
          this.indicesToHighlight = []
        }
      }
    },

    onCandidatesDragEnd() {
      if (this.indicesToHighlight.length === 2) {
        this.indicesToHighlight.forEach((v, k) => {
          const [i, j] = v
          const candidate = this.game.candidates[k]
          this.game.grid[i][j] = candidate
        })

        this.$nextTick(() => {
          this.game.update()

          if (this.game.state === Game.State.PLAY) {
            this.game.generateCandidates()
          }
        })
      }

      this.candidatesAreBeingDragged = false
      this.indicesToHighlight = []
    },

    onCandidatesDragStart() {
      this.candidatesAreBeingDragged = true
    },

    startNewGame() {
      localStorage.clear()
      window.location.reload()
    },
  },

  mounted() {
    this.game = new Game()
  },
})

export { AppView }
