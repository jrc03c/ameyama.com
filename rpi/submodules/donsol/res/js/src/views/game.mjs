// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-game-view {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .x-game-view > * {
    width: 100%;
  }

  .x-game-view .stats {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items center;
    gap: var(--spacing-sm);
  }

  .x-game-view .stats .stat {
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    gap: var(--spacing-sm);
    height: 1em;
  }

  .x-game-view .stats .stat .stat-label {
    color: var(--color-grey-5);
  }

  .x-game-view .stats .stat .x-progress-bar {
    flex-shrink: 999999;
  }

  .x-game-view .card-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .x-game-view.game-over .card-row {
    opacity: 0.25;
    pointer-events: none;
  }

  .x-game-view button {
    width: 100%;
  }

  .x-game-view .run-button {
    background-color: var(--color-grey-5);
  }

  .x-game-view .run-button[disabled],
  .x-game-view.game-over .run-button {
    opacity: 0.25;
    pointer-events: none;
    cursor: not-allowed;
  }

  .x-game-view .reset-button {
    background-color: var(--color-teal-2);
    color: var(--color-grey-10);
  }

  @media (max-width: 512px) {
    .x-game-view .card-row {
      flex-wrap: wrap;
    }

    .x-game-view .card-row .x-card {
      width: calc(50% - calc(var(--spacing-sm) / 2));
      min-width: calc(50% - calc(var(--spacing-sm) / 2));
      max-width: calc(50% - calc(var(--spacing-sm) / 2));
      box-sizing: border-box;
      aspect-ratio: 1;
    }
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div :class="{ 'game-over': game.state !== 'PLAYING' }" class="x-game-view">
    <div class="stats">
      <div class="stat">
        <div class="stat-label">progress:</div>

        <x-progress-bar
          :value="game.played.length / game.deck.length">
        </x-progress-bar>
      </div>

      <div class="stat">
        <div class="stat-label">health:</div>
        <x-progress-bar :value="healthPercent"></x-progress-bar>
      </div>

      <div class="stat">
        <div class="stat-label">shield({{ lastBlockedValue }}):</div>
        <x-progress-bar :value="shieldPercent"></x-progress-bar>
      </div>
    </div>

    <div class="card-row">
      <x-card
        :card="card"
        :key="i"
        @click="select(i)"
        v-for="(card, i) in game.room">
      </x-card>
    </div>

    <button
      :disabled="game.player.ranFromLastRoom"
      @click="game.run()"
      class="run-button">
      Run
    </button>

    <div v-if="game.state === 'LOST'">
      <button @click="game.reset()" class="reset-button">
        You died! 💀 Play again?
      </button>
    </div>

    <div v-if="game.state === 'WON'">
      <button @click="game.reset()" class="reset-button">
        You won! ⚔️ Play again?
      </button>
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { Card } from "../components/card.mjs"
import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { Donsol } from "../donsol.mjs"
import { ProgressBar } from "../components/progress-bar.mjs"

const GameView = createVueComponentWithCSS({
  name: "x-game-view",

  components: {
    "x-card": Card,
    "x-progress-bar": ProgressBar,
  },

  template,

  data() {
    return {
      css,
      game: new Donsol(),
    }
  },

  computed: {
    healthPercent() {
      return this.game.player.health / this.game.player.healthMax
    },

    lastBlockedValue() {
      if (this.game.player.lastCardBlocked) {
        return this.game.player.lastCardBlocked.value
      } else {
        return "_"
      }
    },

    shieldPercent() {
      return this.game.player.shield / this.game.player.shieldMax
    },
  },

  methods: {
    select(i) {
      this.game.select(this.game.room[i])
    },
  },

  mounted() {
    this.game = new Donsol()
    this.game.reset()
  },
})

export { GameView }
