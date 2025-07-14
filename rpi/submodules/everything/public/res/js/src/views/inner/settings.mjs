// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-settings-view">
    <h1>settings</h1>

    <div>
      <h2>password</h2>

      <form @submit.prevent="changePassword">
        <div>
          <input
            :disabled="isWorking"
            @input="clearNotifications"
            placeholder="old password"
            type="password"
            v-model="passwordOld">
        </div>

        <div>
          <input
            :disabled="isWorking"
            @input="clearNotifications"
            placeholder="new password"
            type="password"
            v-model="passwordNew1">
        </div>

        <div>
          <input
            :disabled="isWorking"
            @input="clearNotifications"
            placeholder="confirm new password"
            type="password"
            v-model="passwordNew2">
        </div>

        <div>
          <input
            :disabled="isWorking"
            :value="isChangingPassword ? 'saving...' : 'save'"
            class="bg-turquoise"
            type="submit">
        </div>
      </form>
    </div>

    <hr>

    <div>
      <h2>account</h2>

      <p>
        <b>email:</b> {{ $store.state.fetcher.email }}
      </p>

      <button :disabled="isWorking" @click="deleteAccount" class="bg-pink">
        {{ isDeletingAccount ? "deleting..." : "delete account" }}
      </button>
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { Notification } from "../../components/notification-manager/notification.mjs"
import { pause } from "@jrc03c/pause"

const SettingsView = createVueComponentWithCSS({
  name: "x-settings-view",
  template,

  data() {
    return {
      css,
      isChangingPassword: false,
      isDeletingAccount: false,
      isWorking: false,
      notifications: [],
      passwordOld: "",
      passwordNew1: "",
      passwordNew2: "",
    }
  },

  methods: {
    async changePassword() {
      if (!this.passwordOld || !this.passwordNew1 || !this.passwordNew2) {
        return
      }

      if (this.passwordNew1 !== this.passwordNew2) {
        const notification = new Notification({
          classes: ["bg-yellow"],
          text: "passwords do not match. please try again.",
        })

        this.$store.commit("notify", notification)
        this.notifications.push(notification)
        return
      }

      if (this.isChangingPassword || this.isWorking) {
        return
      }

      this.isChangingPassword = true
      this.isWorking = true

      const response = await this.$store.state.fetcher.post("/authn/change-password", {
        email: this.email,
        passwordOld: this.passwordOld,
        passwordNew: this.passwordNew1,
      })

      if (response.status === 200) {
        this.passwordOld = ""
        this.passwordNew1 = ""
        this.passwordNew2 = ""

        const notification = new Notification({
          classes: ["bg-turquoise"],
          text: "password changed!",
          ttl: 3000,
        })

        this.$store.commit("notify", notification)
        this.notifications.push(notification)
      } else {
        const notification = new Notification({
          classes: ["bg-yellow"],
          text: `${response.status}: ${response.message}`
        })

        this.$store.commit("notify", notification)
        this.notifications.push(notification)
      }

      this.isChangingPassword = false
      this.isWorking = false
    },

    clearNotifications() {
      this.notifications.forEach(notification => {
        try {
          this.$store.commit("unnotify", notification)
        } catch (e) {}
      })
    },

    async deleteAccount() {
      if (this.isDeletingAccount || this.isWorking) {
        return
      }

      this.isDeletingAccount = true
      this.isWorking = true
      await pause(100)

      const shouldDelete = confirm(
        "this will irreversibly and completely delete all data associated with your account. are you sure you want to continue?",
      )

      if (!shouldDelete) {
        this.isDeletingAccount = false
        this.isWorking = false
        return
      }

      const response = await this.$store.state.fetcher.post(
        "/authn/delete-account",
      )

      if (response.status === 200) {
        this.$store.commit("set-email", "")
        this.$router.push("/").catch(() => {})
      } else {
        const notification = new Notification({
          classes: ["bg-yellow"],
          text: `${response.status}: ${response.message}`,
        })

        this.$store.commit("notify", notification)
        this.notifications.push(notification)
        this.isWorking = false
      }
    },
  },
})

export { SettingsView }
