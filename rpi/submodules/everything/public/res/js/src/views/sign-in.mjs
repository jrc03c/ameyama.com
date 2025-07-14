// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-sign-in-view">
    <form @submit.prevent="signIn">
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
        v-model="password">

      <input
        :disabled="isWorking"
        :value="isWorking ? 'signing in...' : 'sign in'"
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

const SignInView = createVueComponentWithCSS({
  name: "x-sign-in-view",
  template,

  data() {
    return {
      css,
      email: "",
      isWorking: false,
      notifications: [],
      password: "",
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

    async signIn() {
      this.email = this.email.trim()

      if (!this.email || !this.password) {
        return
      }

      if (this.isWorking) {
        return
      }

      this.clearNotifications()
      this.isWorking = true

      const response = await this.$store.state.fetcher.post(
        "/authn/verify-password",
        {
          email: this.email,
          password: this.password,
        },
      )

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

export { SignInView }
