import { AppView } from "./views/app.mjs"
import { createApp } from "vue/dist/vue.esm-bundler.js"

const app = createApp(AppView)
app.mount("#app")
