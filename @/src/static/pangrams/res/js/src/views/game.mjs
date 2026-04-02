// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  :root {
    --button-size: 3em;
    --check-size: 8px;
    --shake-size: 4px;
  }

  .x-game-view {
    padding: var(--padding);
    background-color: rgba(0, 0, 255, 0.15);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: var(--padding);
  }

  .typed {
    font-size: 1.5em;
    width: auto;
    text-wrap: nowrap;
  }

  .typed.has-won::before {
    content: "🎉";
    margin-right: var(--padding);
  }

  .typed.has-won::after {
    content: "🎉";
    margin-left: var(--padding);
  }

  .letters,
  .controls {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: var(--padding);
  }

  .letter-button {
    width: var(--button-size);
    min-width: var(--button-size);
    max-width: var(--button-size);
    height: var(--button-size);
    min-height: var(--button-size);
    max-height: var(--button-size);
    position: relative;
  }

  .letter-button.is-used {
    filter: sepia(100%) hue-rotate(150deg);
  }

  .has-shake-animation {
    animation-delay: 0;
    animation-direction: normal;
    animation-duration: 0.15s;
    animation-fill-mode: forwards;
    animation-iteration-count: 3;
    animation-name: shake;
    animation-play-state: playing;
    animation-timing-function: linear;
    position: relative;
  }

  .has-win-animation {
    animation-delay: 0;
    animation-direction: normal;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-name: win;
    animation-play-state: playing;
    animation-timing-function: linear;
    transform-origin: 50% 50%;
  }

  @keyframes shake {
    0% {
      left: 0;
    }

    33% {
      left: calc(-1 * var(--shake-size));
    }

    67% {
      left: var(--shake-size)
    }

    100% {
      left: 0;
    }
  }

  @keyframes win {
    0% { transform: rotate3d(0, 1, 0, 0deg); }
    13% { transform: rotate3d(0, 1, 0, 180deg); }
    25% { transform: rotate3d(0, 1, 0, 360deg) rotate(0deg) scale(1); }
    38% { transform: rotate(15deg) scale(1.15); }
    50% { transform: rotate(0deg) scale(1); }
    63% { transform: rotate(-15deg) scale(1.15); }
    75% { transform: rotate(0deg) scale(1); }
    88% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-game-view">
    <div
      :class="{
        'has-win-animation': hasWon,
        'has-won': true,
      }"
      class="typed"
      ref="typed"
      v-if="typed">
      {{ typed }}
    </div>

    <div class="typed" v-else>
      _
    </div>

    <div class="letters">
      <button
        :class="{
          'is-used': typed.includes(letter),
        }"
         :disabled="hasWon"
        :key="letter"
        @click="typed += letter"
        class="letter-button"
        v-for="letter in letters">
        {{ letter }}
      </button>
    </div>

    <div class="controls">
      <button :disabled="hasWon" @click="submit">
        submit
      </button>

      <button :disabled="hasWon" @click="shuffle">
        shuffle
      </button>

      <button :disabled="hasWon" @click="typed = typed.slice(0, -1)">
        backspace
      </button>
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { pause } from "@jrc03c/pause"
import pangrams from "../pangrams.json" with { type: "json" }

const GameView = createVueComponentWithCSS({
  name: "x-game-view",
  template,

  data() {
    return {
      css,
      hasWon: false,
      isAnimating: false,
      letters: [],
      onKeyDownHandler: null,
      typed: "macrofauna",
      word: null,
    }
  },

  methods: {
    shuffle() {
      this.letters = this.letters.toSorted((a, b) => Math.random() * 2 - 1)
      localStorage.setItem("letters", JSON.stringify(this.letters))
    },

    async submit() {
      if (this.isAnimating) {
        return
      }

      if (this.typed.length === 0) {
        return
      }

      this.isAnimating = true

      if (pangrams.includes(this.typed)) {
        this.hasWon = true
      } else {
        const el = this.$el.querySelector(".typed")
        el.classList.add("has-shake-animation")
        await pause(0.15 * 3 * 1000)
        el.classList.remove("has-shake-animation")
        await pause(500)
        this.typed = ""
      }

      this.isAnimating = false
    },
  },

  mounted() {
    const cachedWord = localStorage.getItem("word")

    if (cachedWord) {
      this.word = cachedWord
    } else {
      this.word = pangrams[Math.floor(Math.random() * pangrams.length)]
      localStorage.setItem("word", this.word)
    }

    console.log("word:", this.word)

    const cachedLetters = localStorage.getItem("letters")

    if (cachedLetters) {
      this.letters = JSON.parse(cachedLetters)
    } else {
      this.letters = Array.from(new Set(this.word.split(""))).toSorted(
        () => Math.random() * 2 - 1,
      )

      localStorage.setItem("letters", JSON.stringify(this.letters))
    }

    this.onKeyDownHandler = event => {
      if (event.key === "Backspace") {
        if (!this.isAnimating) {
          this.typed = this.typed.slice(0, -1)
          this.typed = this.typed || ""
        }

        event.preventDefault()
        event.stopImmediatePropagation()
      } else if (event.key === "Enter") {
        event.preventDefault()
        event.stopImmediatePropagation()
        this.submit()
      } else if (!event.altKey && !event.ctrlKey && !event.metaKey) {
        event.preventDefault()
        event.stopImmediatePropagation()

        if (!this.isAnimating && this.letters.includes(event.key)) {
          this.typed += event.key
        }
      }
    }

    window.addEventListener("keydown", this.onKeyDownHandler)
  },

  unmounted() {
    window.removeEventListener("keydown", this.onKeyDownHandler)
  },
})

export { GameView }
