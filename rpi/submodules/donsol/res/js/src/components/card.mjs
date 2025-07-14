// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-card {
    margin: 0;
    padding: var(--spacing);
    border-radius: var(--border-radius);
    background-color: var(--color-grey-10);
    color: var(--color-grey-1);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 0;
    width: 100%;
    aspect-ratio: 0.642294713;
    cursor: pointer;
    user-select: none;
  }

  .x-card.diamond,
  .x-card.heart {
    color: red;
  }

  .x-card:hover {
    filter: var(--filter-hover);
  }

  .x-card:active {
    filter: var(--filter-active);
  }

  .x-card.empty {
    background-color: var(--color-grey-2);
  }

  .x-card-suit {
    font-size: calc(var(--font-size) * 3);
    line-height: calc(var(--font-size) * 3);
  }

  .x-card-value {
    font-size: calc(var(--font-size) * 1.5);
    line-height: calc(var(--font-size) * 3);
  }

  @media (max-width: 512px) {
    .x-card-suit {
      font-size: 15vw;
      line-height: 12vw;
    }

    .x-card-value {
      font-size: 7.5vw;
      line-height: 12vw;
    }
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div :class="{ [card.suit.toLowerCase()]: true }" class="x-card" v-if="card">
    <div class="x-card-suit">
      {{ card.symbol }}
    </div>

    <div class="x-card-value">
      {{ label }}
    </div>
  </div>

  <div class="empty x-card" v-else></div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const Card = createVueComponentWithCSS({
  name: "x-card",

  props: {
    card: {
      type: undefined,
      required: true,
      default: () => null,
    },
  },

  template,

  data() {
    return {
      css,
    }
  },

  computed: {
    label() {
      return this.card.value < 11 ? this.card.value : this.card.name[0]
    },
  },
})

export { Card }
