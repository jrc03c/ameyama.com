// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-sortable-table {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }

  .x-sortable-table .head,
  .x-sortable-table .body > * {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    gap: var(--spacing);
  }

  .x-sortable-table .head {
    padding-bottom: var(--spacing-xs);
    border-bottom: var(--border-width) solid var(--color-grey-8);
    margin-bottom: var(--spacing-xs);
  }

  .x-sortable-table .head > * {
    font-weight: bold;
    text-align: left;
    user-select: none;
    color: var(--color-grey-5);
  }

  .x-sortable-table .head > .sortable {
    cursor: pointer;
  }

  .x-sortable-table .head > .sortable:hover {
    filter: brightness(105%);
  }

  .x-sortable-table .head > .sortable:active {
    filter: brightness(90%);
  }

  .x-sortable-table .head .sort-by {
    color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .x-sortable-table .head .sort-by::after {
    content: "❯";
    transform: rotate(-90deg);
    display: inline-block;
    line-height: 0;
    width: 1rem;
    min-width: 1rem;
    max-width: 1rem;
    height: 1rem;
    min-height: 1rem;
    max-height: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 0;
  }

  .x-sortable-table .head .sort-by.descending::after {
    transform: rotate(90deg);
  }

  .x-sortable-table .body > * {
    padding: var(--spacing-xs) 0;
    border-bottom: var(--border-width) solid var(--color-grey-9);
  }

  .x-sortable-table .body > * > * {
    text-align: left;
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-sortable-table">
    <div class="head" ref="head">
      <slot name="head"></slot>
    </div>

    <div class="body" ref="body">
      <slot name="body"></slot>
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { pause } from "@jrc03c/pause"

const SortableTable = createVueComponentWithCSS({
  name: "x-sortable-table",
  emits: ["sort"],
  template,

  props: {
    ascending: {
      type: Boolean,
      required: false,
      default: () => true,
    },

    sortable: {
      type: Array,
      required: false,
      default: () => [],
    },

    "sort-by": {
      type: String,
      required: false,
      default: () => "",
    },
  },

  data() {
    return {
      css,
      innerAscending: true,
      innerSortBy: null,
      mutationObserver: null,
    }
  },

  watch: {
    ascending() {
      this.innerAscending = this.ascending
      this.sort()
    },

    sortBy() {
      this.innerSortBy = this.sortBy
      this.sort()
    },
  },

  methods: {
    async sort() {
      if (!this.sortBy) {
        return
      }

      if (!this.innerSortBy) {
        this.innerSortBy = this.sortBy
      }

      while (!this.$refs.head || !this.$refs.body) {
        await pause(100)
      }

      const columnEls = Array.from(this.$refs.head.children)
      const columns = []

      columnEls.forEach(el => {
        el.classList.remove("sort-by")
        el.classList.remove("ascending")
        el.classList.remove("descending")
        columns.push(el.textContent.trim())
      })

      const index = columns.indexOf(this.innerSortBy)
      const columnEl = columnEls[index]
      columnEl.classList.add("sort-by")
      columnEl.classList.add(this.innerAscending ? "ascending" : "descending")

      if (index < 0) {
        throw new Error(
          `The column "${this.innerSortBy}" doesn't exist in the SortableTable!`,
        )
      }

      let children = Array.from(this.$refs.body.children)

      while (children.length === 0) {
        await pause(100)
        children = Array.from(this.$refs.body.children)
      }

      children.sort((a, b) => {
        const aValue = (() => {
          try {
            return JSON.parse(a.children[index].textContent)
          } catch (e) {
            return a.children[index].textContent
          }
        })()

        const bValue = (() => {
          try {
            return JSON.parse(b.children[index].textContent)
          } catch (e) {
            return b.children[index].textContent
          }
        })()

        return (aValue < bValue ? -1 : 1) * (this.innerAscending ? 1 : -1)
      })

      this.$refs.body.innerHTML = ""
      children.forEach(child => this.$refs.body.appendChild(child))

      this.$emit("sort", {
        ascending: this.innerAscending,
        sortBy: this.innerSortBy,
      })
    },
  },

  mounted() {
    const addColumnClickListeners = () => {
      for (const child of this.$refs.head.children) {
        const name = child.textContent.trim()

        if (this.sortable.length === 0 || this.sortable.includes(name)) {
          child.classList.add("sortable")

          child.addEventListener("click", () => {
            if (name === this.innerSortBy) {
              this.innerAscending = !this.innerAscending
            } else {
              this.innerAscending = true
              this.innerSortBy = name
            }

            this.sort()
          })
        }
      }
    }

    this.mutationObserver = new MutationObserver(addColumnClickListeners)

    this.$nextTick(() => {
      this.mutationObserver.observe(this.$refs.head, {
        childList: true,
        subtree: true,
      })

      addColumnClickListeners()
      this.sort()
    })
  },
})

export { SortableTable }
