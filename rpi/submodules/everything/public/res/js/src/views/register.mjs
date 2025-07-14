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
      <input
        :disabled="isWorking"
        @input="clearNotifications"
        placeholder="someone@example.com"
        type="email"
        v-model="email">

      <input
        :disabled="isWorking"
        @input="clearNotifications"
        placeholder="password"
        type="password"
        v-model="password1">

      <input
        :disabled="isWorking"
        @input="clearNotifications"
        placeholder="confirm password"
        type="password"
        v-model="password2">

      <input
        :disabled="isWorking"
        :value="isWorking ? 'registering...' : 'register'"
        class="bg-turquoise"
        type="submit">
    </form>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { Notification } from "../components/notification-manager/notification.mjs"

const RegisterView = createVueComponentWithCSS({
  name: "x-register-view",
  template,

  data() {
    return {
      css,
      email: "",
      isWorking: false,
      notifications: [],
      password1: "",
      password2: "",
    }
  },

  methods: {
    clearNotifications() {
      this.notifications.forEach(notification => {
        try {
          this.$store.commit("unnotify", notification)
        } catch (e) {}
      })
    },

    async register() {
      this.email = this.email.trim()

      if (!this.email || !this.password1 || !this.password2) {
        return
      }

      if (this.password1 !== this.password2) {
        const notification = new Notification({
          classes: ["bg-yellow"],
          text: "passwords do not match. please try again.",
        })

        this.$store.commit("notify", notification)
        this.notifications.push(notification)
        return
      }

      if (this.isWorking) {
        return
      }

      this.clearNotifications()
      this.isWorking = true

      const response = await this.$store.state.fetcher.post("/authn/register", {
        email: this.email,
        password: this.password1,
      })

      if (response.status === 200) {
        this.$store.commit("set-email", this.email)
        this.$router.push("/app").catch(() => {})
      } else {
        this.isWorking = false

        const notification = new Notification({
          classes: ["bg-yellow"],
          text: `${response.status}: ${response.message}`,
        })

        this.$store.commit("notify", notification)
        this.notifications.push(notification)
      }
    },
  },

  unmounted() {
    this.clearNotifications()
  },
})

export { RegisterView }
