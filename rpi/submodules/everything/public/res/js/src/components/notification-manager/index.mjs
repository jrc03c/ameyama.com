// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-notification-manager {
    position: fixed;
    left: calc(calc(100vw - 768px) / 2);
    bottom: 0;
    width: 768px;
    min-width: 768px;
    max-width: 768px;
    max-height: 100vh;
    overflow-y: auto;
    z-index: 999999;
    padding: 0 0 var(--spacing) 0;
  }

  .x-notification-manager .notification {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    margin: 0 0 var(--spacing-xs) 0;
    box-shadow: var(--shadow);
  }

  @media (max-width: 768px) {
    .x-notification-manager {
      left: 0;
      width: 100vw;
      min-width: 100vw;
      max-width: 100vw;
      padding: var(--spacing);
    }
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-notification-manager">
    <div
      :class="notification.classes"
      :key="i"
      class="notification"
      v-for="(notification, i) in $store.state.notifications">
      <button
        @click="$store.commit('unnotify', notification)"
        class="close"
        v-if="notification.isDismissable">
      </button>

      {{ notification.text }}
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const NotificationManager = createVueComponentWithCSS({
  name: "x-notification-manager",
  template,

  data() {
    return {
      css,
    }
  },
})

export { NotificationManager }
