// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-register-view">
    <form @submit.prevent="register">
      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
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
            class="input"
            placeholder="Password"
            type="password"
            v-model="password1">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            class="input"
            placeholder="Confirm password"
            type="password"
            v-model="password2">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            :value="isWorking ? 'Registering...' : 'Register'"
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

const RegisterView = createVueComponentWithCSS({
  name: "x-register-view",
  template,

  data() {
    return {
      css,
      email: "",
      isWorking: false,
      message: {
        class: "",
        text: "",
      },
      password1: "",
      password2: "",
    }
  },

  methods: {
    async register() {
      this.email = this.email.trim()

      if (!this.email || !this.password1 || !this.password2) {
        return
      }

      if (this.password1 !== this.password2) {
        this.message.class = "is-warning"
        this.message.text = "Passwords do not match. Please try again."
        return
      }

      if (this.isWorking) {
        return
      }

      this.isWorking = true
      this.message.class = ""
      this.message.text = ""

      const response = await fetch("/authn/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password1,
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

export { RegisterView }
