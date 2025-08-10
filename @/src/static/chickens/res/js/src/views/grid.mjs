// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-grid-view {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    aspect-ratio: 1;
    border: var(--border-width) solid var(--blue-darkest);
    border-radius: var(--border-radius);
  }

  .x-grid-view .row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 0;
  }

  .x-grid-view .row .cell {
    aspect-ratio: 1;
    border: var(--border-width) solid var(--blue-darkest);
    background-color: var(--blue-darker);
  }

  .x-grid-view .row .cell.highlighted {
    background-color: gray;
  }

  .fade-enter-from {}

  .fade-enter-active {}

  .fade-enter-to {}

  .fade-leave-from {
    opacity: 1;
    transform: scale(1);
  }

  .fade-leave-active {
    transition: all 0.25s ease;
    transform-origin: 50% 50%;
  }

  .fade-leave-to {
    opacity: 0;
    transform: scale(1.25);
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-grid-view">
    <div :key="i" class="row" v-for="(row, i) in grid">
      <div
        :class="{ 'highlighted': isHighlighted(i, j) }"
        :key="j"
        :style="'width: ' + (100 / row.length) + '%'"
        class="cell"
        v-for="(chicken, j) in row">
        <transition name="fade">
          <x-chicken :type="chicken.type" v-if="chicken"></x-chicken>
        </transition>
      </div>
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { Chicken as ChickenComponent } from "../components/chicken.mjs"
import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const GridView = createVueComponentWithCSS({
  name: "x-grid-view",

  components: {
    "x-chicken": ChickenComponent,
  },

  template,

  props: {
    grid: {
      type: Array,
      required: true,
      default: () => [],
    },

    "indices-to-highlight": {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  data() {
    return {
      css,
    }
  },

  methods: {
    isHighlighted(i, j) {
      if (this.indicesToHighlight.length !== 2) {
        return false
      }

      return !!this.indicesToHighlight.find(v => v[0] === i && v[1] === j)
    },
  },
})

export { GridView }
