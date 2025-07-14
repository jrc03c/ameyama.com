// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-nav-view {
    margin: 0 0 var(--spacing) 0;
    padding: var(--spacing) 0;
    border-bottom: var(--border-width) solid black;
  }

  .x-nav-view .burger {
    display: none;
    text-align: right;
  }

  .x-nav-view .burger button {
    line-height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    width: 1rem;
    min-width: 1rem;
    max-width: 1rem;
    height: 1rem;
    min-height: 1rem;
    max-height: 1rem;
    background-color: transparent;
    box-shadow: none;
  }

  .x-nav-view .burger button::before {
    content: "❯";
    display: inline-block;
    transform: rotate(90deg);
  }

  .x-nav-view .burger button:active {
    top: unset;
    margin-bottom: unset;
  }

  .x-nav-view .burger.flipped button::before {
    transform: rotate(-90deg);
  }

  .x-nav-view .x-nav-menu {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    gap: 0;
  }

  .x-nav-view ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    gap: var(--spacing);
  }

  .x-nav-view ul li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .x-nav-view hr {
    display: none;
  }

  @media (max-width: 768px) {
    .x-nav-view .burger {
      display: block;
    }

    .x-nav-view .x-nav-menu,
    .x-nav-view .x-nav-menu ul {
      display: block;
    }

    .x-nav-view hr {
      display: block;
    }
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <nav class="x-nav-view">
    <div
      :class="{ 'flipped': navMenuIsOpen }"
      @click="navMenuIsOpen = !navMenuIsOpen"
      class="burger">
      <button></button>
    </div>

    <div class="x-nav-menu" v-if="navMenuIsOpen">
      <hr>

      <ul>
        <li>
          <a
            :class="{ 'current': path.includes('/app/notes') }"
            @click.stop.prevent="goto('/app/notes')"
            href="#">
            notes
          </a>
        </li>

        <li>
          <a
            :class="{ 'current': path.includes('/app/settings') }"
            @click.stop.prevent="goto('/app/settings')"
            href="#">
            settings
          </a>
        </li>
      </ul>

      <hr>

      <div>
        <div style="color: var(--color-grey-5);" v-if="isWorking">
          signing out...
        </div>

        <a
          @click.stop.prevent="() => {
            onWindowResize()
            signOut()
          }"
          href="#"
          v-else>
          sign out
        </a>
      </div>
    </div>
  </nav>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { Notification } from "../../components/notification-manager/notification.mjs"

const NavView = createVueComponentWithCSS({
  name: "x-nav-view",
  template,

  data() {
    return {
      css,
      isWorking: false,
      navMenuIsOpen: false,
      path: "/",
    }
  },

  methods: {
    goto(path) {
      this.onWindowResize()
      this.path = path
      this.$router.push(path).catch(() => {})
    },

    onKeyDown(event) {
      if (event.key === "Escape" && window.innerWidth <= 768) {
        this.navMenuIsOpen = false
      }
    },

    onWindowResize() {
      this.navMenuIsOpen = window.innerWidth > 768
    },

    async signOut() {
      if (this.isWorking) {
        return
      }

      this.isWorking = true

      const response = await this.$store.state.fetcher.post("/authn/sign-out")

      if (response.status === 200) {
        this.$store.commit("set-email", "")
        this.$router.push("/").catch(() => {})
      } else {
        this.$store.commit(
          "notify",
          new Notification({
            classes: ["bg-yellow"],
            text: `${response.status}: ${response.message}`,
          }),
        )
      }
    },
  },

  mounted() {
    window.addEventListener("keydown", this.onKeyDown)
    window.addEventListener("resize", this.onWindowResize)
    this.onWindowResize()
    this.path = this.$router.currentRoute._value.fullPath
  },

  unmounted() {
    window.removeEventListener("keydown", this.onKeyDown)
    window.removeEventListener("resize", this.onWindowResize)
  },
})

export { NavView }
