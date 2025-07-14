// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .app {
    width: 768px;
    min-width: 768px;
    max-width: 768px;
    margin: var(--spacing) auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
  }

  .app > * {
    width: 100%;
  }

  @media (max-width: 768px) {
    .app {
      width: 100vw;
      min-width: 100vw;
      max-width: 100vw;
      margin: 0;
      padding: var(--spacing);
      box-sizing: border-box;
    }
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="app">
    <router-view></router-view>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { AboutView } from "./views/about.mjs"
import { createApp } from "vue/dist/vue.esm-bundler.js"

import {
  createRouter,
  createWebHashHistory,
} from "vue-router/dist/vue-router.esm-bundler.js"

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { GameView } from "./views/game.mjs"
import { HowToPlayView } from "./views/how-to-play.mjs"
import { MenuView } from "./views/menu.mjs"

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    { path: "/", component: MenuView },
    { path: "/how-to-play", component: HowToPlayView },
    { path: "/about", component: AboutView },
    { path: "/game", component: GameView },
  ],
})

const app = createApp(
  createVueComponentWithCSS({
    name: "x-component",
    template,

    data() {
      return {
        css,
        isPlaying: false,
      }
    },
  })
)

app.use(router)
app.mount("#app")
