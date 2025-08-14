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
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  .x-candidates-view.visible {
    opacity: 1;
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

function debounce(fn) {
  return function() {
    window.requestAnimationFrame(() => fn(...arguments))
  }
}

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
      resizeObserver: null,
      touchOffset: { x: 0, y: 32 },
      width: 100,
      x: 0,
      y: 0,
    }
  },

  methods: {
    onMouseDown(event) {
      this.onTouchStart({
        touches: [
          {
            clientX: event.clientX,
            clientY: event.clientY,
            offsetX: event.offsetX,
            offsetY: event.offsetY,
          }
        ],

        preventDefault: () => event.preventDefault(),
        stopImmediatePropagation: () => event.stopImmediatePropagation(),
      })
    },

    onMouseMove(event) {
      this.onTouchMove({
        touches: [
          {
            clientX: event.clientX,
            clientY: event.clientY,
            offsetX: event.offsetX,
            offsetY: event.offsetY,
          }
        ],

        preventDefault: () => event.preventDefault(),
        stopImmediatePropagation: () => event.stopImmediatePropagation(),
      })
    },

    onMouseUp(event) {
      this.onTouchEnd({
        touches: [
          {
            clientX: event.clientX,
            clientY: event.clientY,
            offsetX: event.offsetX,
            offsetY: event.offsetY,
          }
        ],

        preventDefault: () => event.preventDefault(),
        stopImmediatePropagation: () => event.stopImmediatePropagation(),
      })
    },

    onTouchStart(event) {
      const rect = this.$el.getBoundingClientRect()
      const cx = rect.x + rect.width / 2
      const cy = rect.y + rect.height / 2
      const touch = event.touches[0]
      const tx = touch.clientX
      const ty = touch.clientY
      const d = Math.sqrt(Math.pow(tx - cx, 2) + Math.pow(ty - cy, 2))

      if (d < Math.max(rect.width, rect.height) * 1.5) {
        event.stopImmediatePropagation()
        event.preventDefault()
        this.isBeingDragged = true
        this.recomputeStyle()
        this.$emit("drag-start")
      }
    },

    onTouchMove(event) {
      event.stopImmediatePropagation()
      event.preventDefault()

      if (this.isBeingDragged) {
        const touch = event.touches[0]
        this.x = touch.clientX + this.touchOffset.x
        this.y = touch.clientY + this.touchOffset.y
        this.recomputeStyle()
        this.$emit("drag")
      }
    },

    onTouchEnd(event) {
      if (this.isBeingDragged) {
        event.stopImmediatePropagation()
        event.preventDefault()
        this.recomputeStyle()
        this.$emit("drag-end")
      }

      this.isBeingDragged = false
      this.onParentResize()
    },

    onParentResize() {
      if (!this.$el || !this.$el.parentElement) {
        return
      }

      const parentRect = this.$el.parentElement.getBoundingClientRect()
      const { width, height } = this.$el.getBoundingClientRect()

      if (this.candidates.orientation === Game.Orientation.HORIZONTAL) {
        this.width = Math.round(parentRect.width / 3)
        this.height = Math.round(this.width / 2)
        this.x = parentRect.x + parentRect.width / 2 - width / 2
        this.y = parentRect.y + parentRect.height / 2 - height / 2
        this.touchOffset.x = -this.width / 2
        this.touchOffset.y = -this.height * 2
      } else {
        this.height = parentRect.height
        this.width = Math.round(this.height / 2)
        this.x = parentRect.x + parentRect.width / 2 - width / 2
        this.y = parentRect.y
        this.touchOffset.x = -this.width / 2
        this.touchOffset.y = -this.height * 1.5
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
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)
    this.onParentResize = this.onParentResize.bind(this)

    window.addEventListener("mousedown", this.onMouseDown)
    window.addEventListener("mousemove", this.onMouseMove)
    window.addEventListener("mouseup", this.onMouseUp)
    window.addEventListener("touchstart", this.onTouchStart)
    window.addEventListener("touchmove", this.onTouchMove)
    window.addEventListener("touchend", this.onTouchEnd)
    window.addEventListener("resize", this.onParentResize)

    this.onParentResize = debounce(this.onParentResize).bind(this)
    this.resizeObserver = new ResizeObserver(this.onParentResize)
    this.resizeObserver.observe(this.$el.parentElement)
    this.recomputeStyle = debounce(this.recomputeStyle).bind(this)

    setTimeout(() => this.onParentResize(), 100)
    setTimeout(() => this.$el.classList.add("visible"), 200)
  },

  unmounted() {
    window.removeEventListener("mousedown", this.onMouseDown)
    window.removeEventListener("mousemove", this.onMouseMove)
    window.removeEventListener("mouseup", this.onMouseUp)
    window.removeEventListener("touchstart", this.onTouchStart)
    window.removeEventListener("touchmove", this.onTouchMove)
    window.removeEventListener("touchend", this.onTouchEnd)
    window.removeEventListener("resize", this.onParentResize)
    this.resizeObserver.disconnect()
  },
})

export { CandidatesView }
