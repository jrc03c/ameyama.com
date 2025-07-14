// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-login-view">
    <form @submit.prevent="login">
      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            @input="message.text = ''"
            class="input"
            placeholder="Email address"
            type="email"
            v-model="email">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            @input="message.text = ''"
            class="input"
            placeholder="Password"
            type="password"
            v-model="password">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            :value="isWorking ? 'Logging in...' : 'Log in'"
            class="button is-primary"
            type="submit">
        </div>
      </div>
    </form>

    <br />

    <div
      :class="{ [message.class]: true }"
      class="is-light notification"
      v-if="message.text">
      <button @click="message.text = ''" class="delete"></button>
      {{ message.text }}
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const LoginView = createVueComponentWithCSS({
  name: "x-login-view",
  template,

  data() {
    return {
      css,
      email: "",
      isWorking: false,
      message: {
        class: "is-warning",
        text: "",
      },
      password: "",
    }
  },

  methods: {
    async login() {
      this.email = this.email.trim()

      if (!this.email) {
        return
      }

      if (!this.password) {
        return
      }

      if (this.isWorking) {
        return
      }

      this.isWorking = true
      this.message.class = ""
      this.message.text = ""

      const response = await fetch("/authn/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      })

      if (response.status === 200) {
        this.$store.commit("set-email", this.email)
        this.$router.push("/inner/notes").catch(() => {})
      } else {
        this.message.class = "is-danger"

        this.message.text = `${response.status}: ${(await response.json()).message}`

        this.isWorking = false
      }
    },
  },
})

export { LoginView }
