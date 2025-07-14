// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-inner-view">
    <div class="tabs">
      <ul>
        <li
          :class="{
            'is-active':
              $router.currentRoute._value.fullPath.includes(tab.path),
          }"
          :key="i"
          @click="$router.push(tab.path)"
          v-for="(tab, i) in tabs">
          <a>
            <b>
              {{ tab.label }}
            </b>
          </a>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const InnerView = createVueComponentWithCSS({
  name: "x-inner-view",
  template,

  data() {
    return {
      css,
      tabs: [
        { label: "Notes", path: "/inner/notes" },
        { label: "Settings", path: "/inner/settings" },
      ],
    }
  },
})

export { InnerView }
