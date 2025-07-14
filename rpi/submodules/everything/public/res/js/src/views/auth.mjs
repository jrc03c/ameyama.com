// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-auth-view {
    padding: var(--spacing);
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: var(--spacing);
  }

  .x-auth-view form {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: var(--spacing);
    margin-bottom: var(--spacing);
  }

  .x-auth-view form input {
    text-align: center;
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-auth-view">
    <div class="row">
      <router-link
        :class="{
          'current': $router.currentRoute._value.fullPath.includes('/sign-in'),
        }"
        to="/sign-in">
        sign in
      </router-link>

      <span style="color: var(--color-grey-8);">
        |
      </span>

      <router-link
        :class="{
          'current': $router.currentRoute._value.fullPath.includes('/register'),
        }"
        to="/register">
        register
      </router-link>
    </div>

    <router-view></router-view>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const AuthView = createVueComponentWithCSS({
  name: "x-auth-view",
  template,

  data() {
    return {
      css,
    }
  },

  mounted() {
    if (this.$router.currentRoute._value.fullPath === "/") {
      this.$router.push("/sign-in")
    }
  },
})

export { AuthView }
