// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-candidates-view {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 0;
    position: fixed;
    left: 0;
    top: 0;
  }

  .x-candidates-view.vertical {
    flex-direction: column;
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div
    :class="{ [candidates.orientation.toLowerCase()]: true }"
    :style="computedStyle"
    @touchstart="onTouchStart"
    class="x-candidates-view"
    v-if="candidates">
    <x-chicken :type="candidates[0].type"></x-chicken>
    <x-chicken :type="candidates[1].type"></x-chicken>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { Chicken } from "../components/chicken.mjs"
import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { Game } from "../model/game.mjs"

const CandidatesView = createVueComponentWithCSS({
  name: "x-candidates-view",
  emits: ["drag", "drag-end", "drag-start"],

  components: {
    "x-chicken": Chicken,
  },

  template,

  props: {
    candidates: {
      type: Object,
      required: true,
      default: () => null,
    },
  },

  data() {
    return {
      computedStyle: "",
      css,
      height: 100,
      isBeingDragged: false,
      mouseOffset: { x: 0, y: 0 },
      resizeObserver: null,
      touchOffset: { x: 0, y: 32 },
      width: 100,
      x: 0,
      y: 0,
    }
  },

  watch: {
    candidates() {
      this.onParentResize()
    },
  },

  methods: {
    onTouchStart(event) {
      event.stopImmediatePropagation()
      event.preventDefault()
      this.isBeingDragged = true
      const touch = event.touches[0]
      const rect = this.$el.getBoundingClientRect()
      this.mouseOffset.x = touch.clientX - rect.x
      this.mouseOffset.y = touch.clientY - rect.y
      this.recomputeStyle()
      this.$emit("drag-start")
    },

    onTouchMove(event) {
      event.stopImmediatePropagation()
      event.preventDefault()

      if (this.isBeingDragged) {
        const touch = event.touches[0]
        this.x = touch.clientX - this.mouseOffset.x + this.touchOffset.x
        this.y = touch.clientY - this.mouseOffset.y + this.touchOffset.y
        this.recomputeStyle()
        this.$emit("drag")
      }
    },

    onTouchEnd(event) {
      event.stopImmediatePropagation()
      event.preventDefault()

      if (this.isBeingDragged) {
        this.$emit("drag-end")
      }

      this.isBeingDragged = false
      this.onParentResize()
    },

    onParentResize() {
      const parentRect = this.$el.parentElement.getBoundingClientRect()
      const { width, height } = this.$el.getBoundingClientRect()

      if (this.candidates.orientation === Game.Orientation.HORIZONTAL) {
        this.width = Math.round(parentRect.width / 3)
        this.height = Math.round(this.width / 2)
        this.x = parentRect.x + parentRect.width / 2 - width / 2
        this.y = parentRect.y + parentRect.height / 2 - height / 2
        this.touchOffset.y = -this.height * 1.25
      } else {
        this.height = parentRect.height
        this.width = Math.round(this.height / 2)
        this.x = parentRect.x + parentRect.width / 2 - width / 2
        this.y = parentRect.y
        this.touchOffset.y = -this.width * 1.25
      }

      this.recomputeStyle()
    },

    recomputeStyle() {
      this.computedStyle = `
        left: ${this.x}px;
        top: ${this.y}px;
        width: ${this.width}px;
        min-width: ${this.width}px;
        max-width: ${this.width}px;
        height: ${this.height}px;
        min-height: ${this.height}px;
        max-height: ${this.height}px;
      `
    },
  },

  mounted() {
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)
    this.onParentResize = this.onParentResize.bind(this)
    window.addEventListener("touchmove", this.onTouchMove)
    window.addEventListener("touchend", this.onTouchEnd)
    window.addEventListener("resize", this.onParentResize)
    this.resizeObserver = new ResizeObserver(this.onParentResize)
    this.resizeObserver.observe(this.$el.parentElement)
    window.requestAnimationFrame(() => this.onParentResize())
  },

  unmounted() {
    window.removeEventListener("touchmove", this.onTouchMove)
    window.removeEventListener("touchend", this.onTouchEnd)
    window.removeEventListener("resize", this.onParentResize)
    this.resizeObserver.disconnect()
  },
})

export { CandidatesView }
