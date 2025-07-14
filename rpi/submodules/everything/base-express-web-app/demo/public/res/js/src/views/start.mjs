// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-start-view">
    <div class="tabs">
      <ul>
        <li
          :class="{
            'is-active':
              $router.currentRoute._value.fullPath.includes(tab.path),
          }"
          :key="i"
          @click="$router.push(tab.path).catch(() => {})"
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

const StartView = createVueComponentWithCSS({
  name: "x-start-view",
  template,

  data() {
    return {
      activeTab: null,
      css,
      tabs: [
        { label: "Log in", path: "/login" },
        { label: "Register", path: "/register" },
      ],
    }
  },

  mounted() {
    if (this.$router.currentRoute._value.fullPath === "/") {
      this.$router.push("/login")
    }
  },
})

export { StartView }
