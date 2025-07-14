// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-settings-view">
    <div class="notification">
      <b>Email:</b>
      {{ $store.state.email }}
    </div>

    <div class="notification">
      <p><b>Change password</b></p>

      <form @submit.prevent="changePassword">
        <div class="field">
          <div class="control">
            <input
              :disabled="isWorking"
              @input="message.text = ''"
              class="input"
              placeholder="Old password"
              type="password"
              v-model="passwordOld">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input
              :disabled="isWorking"
              @input="message.text = ''"
              class="input"
              placeholder="New password"
              type="password"
              v-model="passwordNew1">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input
              :disabled="isWorking"
              @input="message.text = ''"
              class="input"
              placeholder="Confirm new password"
              type="password"
              v-model="passwordNew2">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input
              :disabled="isWorking"
              :value="isChangingPassword ? 'Changing...' : 'Change password'"
              class="button is-primary"
              type="submit">
          </div>
        </div>
      </form>
    </div>

    <div class="notification">
      <button :disabled="isWorking" @click="signOut" class="button is-dark">
        {{ isSigningOut ? "One moment..." : "Sign out" }}
      </button>

      <button
        :disabled="isWorking"
        @click="deleteAccount"
        class="button is-danger"
        style="margin-left: 0.25em">
        {{ isDeletingAccount ? 'Deleting...' : 'Delete account' }}
      </button>
    </div>

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
import { pause } from "@jrc03c/pause"

const SettingsView = createVueComponentWithCSS({
  name: "x-settings-view",
  template,

  data() {
    return {
      css,
      isChangingPassword: false,
      isDeletingAccount: false,
      isSigningOut: false,
      isWorking: false,
      message: {
        class: "",
        text: "",
        timeout: null,
      },
      passwordOld: "",
      passwordNew1: "",
      passwordNew2: "",
    }
  },

  methods: {
    async changePassword() {
      if (!this.passwordNew1 || !this.passwordNew2) {
        return
      }

      if (this.passwordNew1 !== this.passwordNew2) {
        this.message.class = "is-warning"
        this.message.text = "New passwords do not match. Please try again."
        return
      }

      if (this.isWorking) {
        return
      }

      this.isChangingPassword = true
      this.isWorking = true
      this.message.class = ""
      this.message.text = ""
      clearTimeout(this.message.timeout)

      const response = await fetch("/authn/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.$store.state.email,
          passwordOld: this.passwordOld,
          passwordNew: this.passwordNew1,
        }),
      })

      if (response.status === 200) {
        this.passwordOld = ""
        this.passwordNew1 = ""
        this.passwordNew2 = ""

        this.message.class = "is-success"
        this.message.text = "Password changed!"

        this.message.timeout = setTimeout(() => {
          this.message.text = ""
        }, 2000)
      } else {
        this.message.class = "is-danger"

        this.message.text = `${response.status}: ${(await response.json()).message}`
      }

      this.isChangingPassword = false
      this.isWorking = false
    },

    async deleteAccount() {
      this.isDeletingAccount = true
      this.isWorking = true

      await pause(100)

      const shouldDelete = confirm(
        "This will completely and irreversibly delete all data associated with your account! Are you sure you want to continue?",
      )

      if (!shouldDelete) {
        this.isDeletingAccount = false
        this.isWorking = false
        return
      }

      const response = await fetch("/authn/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.$store.state.email }),
      })

      if (response.status === 200) {
        this.$store.commit("set-email", "")
        this.$router.push("/").catch(() => {})
      } else {
        this.message.class = "is-danger"

        this.message.text = `${response.status}: ${(await response.json()).message}`

        this.isDeletingAccount = false
        this.isWorking = false
      }
    },

    async signOut() {
      this.isSigningOut = true
      this.isWorking = true

      const response = await fetch("/authn/sign-out", {
        method: "POST",
      })

      if (response.status === 200) {
        this.$store.commit("set-email", "")
        this.$router.push("/").catch(() => {})
      } else {
        this.message.class = "is-danger"

        this.message.text = `${response.status}: ${(await response.json()).message}`

        this.isSigningOut = false
        this.isWorking = false
      }
    },
  },
})

export { SettingsView }
