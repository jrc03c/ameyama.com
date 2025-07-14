// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-app {
    width: 768px;
    min-width: 768px;
    max-width: 768px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .x-app {
      width: 100vw;
      min-width: 100vw;
      max-width: 100vw;
      padding: 0 var(--spacing);
    }
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-app">
    <x-notification-manager></x-notification-manager>
    <router-view></router-view>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { AppView } from "./views/app.mjs"
import { AuthView } from "./views/auth.mjs"
import { createApp } from "vue/dist/vue.esm-bundler.js"

import {
  createRouter,
  createWebHashHistory,
} from "vue-router/dist/vue-router.esm-bundler.js"

import { createStore } from "vuex/dist/vuex.esm-bundler.js"
import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { Fetcher } from "./fetcher.mjs"
import { NotesView } from "./views/inner/notes/index.mjs"
import { NotesEditView } from "./views/inner/notes/edit.mjs"
import { NotificationManager } from "./components/notification-manager/index.mjs"
import { PlaygroundView } from "./views/playground.mjs"
import { RegisterView } from "./views/register.mjs"
import { SettingsView } from "./views/inner/settings.mjs"
import { SignInView } from "./views/sign-in.mjs"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: AuthView,
      children: [
        { path: "sign-in", component: SignInView },
        { path: "register", component: RegisterView },
      ],
    },
    {
      path: "/app",
      component: AppView,
      children: [
        { path: "notes", component: NotesView },
        { path: "notes/edit/:id", props: true, component: NotesEditView },
        { path: "settings", component: SettingsView },
      ],
    },
    { path: "/playground", component: PlaygroundView },
  ],
})

const cachedEmail = localStorage.getItem("email")

const store = createStore({
  state() {
    return {
      fetcher: new Fetcher({ email: cachedEmail || "", router }),
      notifications: [],
    }
  },

  mutations: {
    notify(state, notification) {
      state.notifications.push(notification)

      if (notification.ttl < Infinity) {
        setTimeout(
          () => store.commit("unnotify", notification),
          notification.ttl,
        )
      }
    },

    ["set-email"](state, email) {
      state.fetcher.email = email
      localStorage.setItem("email", email)
    },

    unnotify(state, notification) {
      if (state.notifications.includes(notification)) {
        state.notifications.splice(state.notifications.indexOf(notification), 1)
      }
    },
  },
})

const app = createApp(
  createVueComponentWithCSS({
    components: {
      "x-notification-manager": NotificationManager,
    },

    template,

    data() {
      return {
        css,
      }
    },
  }),
)

app.use(store)
app.use(router)
app.mount("#app")
