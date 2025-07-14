import { AppView } from "./views/app.mjs"
import { createApp } from "vue/dist/vue.esm-bundler.js"

import {
  createRouter,
  createWebHashHistory,
} from "vue-router/dist/vue-router.esm-bundler.js"

import { createStore } from "vuex/dist/vuex.esm-bundler.js"
import { InnerView } from "./views/inner/index.mjs"
import { LoginView } from "./views/login.mjs"
import { NotesView } from "./views/inner/notes.mjs"
import { RegisterView } from "./views/register.mjs"
import { SettingsView } from "./views/inner/settings.mjs"
import { StartView } from "./views/start.mjs"

const cachedEmail = localStorage.getItem("email")

const store = createStore({
  state() {
    return {
      email: cachedEmail || "",
    }
  },

  mutations: {
    ["set-email"](state, email) {
      state.email = email
      localStorage.setItem("email", email)
    },
  },
})

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      component: StartView,
      children: [
        { path: "login", component: LoginView },
        { path: "register", component: RegisterView },
      ],
    },
    {
      path: "/inner",
      component: InnerView,
      children: [
        { path: "notes", component: NotesView },
        { path: "settings", component: SettingsView },
      ],
    },
  ],
})

const app = createApp(AppView)
app.use(store)
app.use(router)
app.mount("#app")

!(async () => {
  const response = await fetch("/authn/is-signed-in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: cachedEmail }),
  })

  const isSignedIn = await response.json()
  const path = router.currentRoute._value.fullPath

  if (isSignedIn) {
    if (path.includes("/login") || path.includes("/register")) {
      router.push("/inner/notes")
    }
  } else {
    if (!path.includes("/login") && !path.includes("/register")) {
      router.push("/login")
    }
  }
})()
