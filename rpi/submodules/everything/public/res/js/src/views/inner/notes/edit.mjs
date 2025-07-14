// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-notes-edit-view .controls {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    gap: var(--spacing-xs);
  }

  @media (max-width: 768px) {
    .x-notes-edit-view .title-row {
      display: flex;
      flex-direction: column-reverse;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: center;
      align-items: center;
      gap: var(--spacing);
    }

    .x-notes-edit-view .controls {
      justify-content: space-between;
    }

    .x-notes-edit-view .controls button {
      width: 100%;
      flex-shrink: 999999;
    }
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-notes-edit-view">
    <div class="row title-row">
      <h1
        :contenteditable="!isDeleting && !isLoading"
        @blur="note.title = $refs.h1.textContent"
        @focus="titleOld = note ? note.title : ''"
        ref="h1">
        {{ note ? note.title : '...' }}
      </h1>

      <div class="controls">
        <button
          :disabled="isSaving || isLoading"
          @click="save"
          class="bg-turquoise">
          {{ isSaving ? "saving..." : "save" }}
        </button>

        <button
          :disabled="isDeleting || isLoading"
          @click="deleteNote"
          class="bg-pink">
          {{ isDeleting ? "deleting..." : "delete" }}
        </button>
      </div>
    </div>

    <hr>

    <x-text-editor
      :text="note.text"
      @edit="note.text = $event"
      v-if="note">
    </x-text-editor>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { Notification } from "../../../components/notification-manager/notification.mjs"
import { pause } from "@jrc03c/pause"
import { TextEditor } from "../../../components/text-editor/index.mjs"

const NotesEditView = createVueComponentWithCSS({
  name: "x-notes-edit-view",

  components: {
    "x-text-editor": TextEditor,
  },

  template,

  props: {
    id: {
      type: String,
      required: true,
      default: () => "",
    },
  },

  data() {
    return {
      css,
      isDeleting: false,
      isLoading: false,
      isSaving: false,
      note: null,
      titleOld: "",
    }
  },

  methods: {
    async deleteNote() {
      if (this.isDeleting) {
        return
      }

      this.isDeleting = true
      await pause(100)

      const shouldDelete = confirm(
        `the note "${this.note.title}" will be irreversibly deleted. are you sure you want to continue?`,
      )

      if (!shouldDelete) {
        this.isDeleting = false
        return
      }

      const response = await this.$store.state.fetcher.post("/db/write", {
        key: "/notes/" + this.id,
        value: null,
      })

      if (response.status === 200) {
        this.$router.push("/app/notes").catch(() => {})
      } else {
        this.$store.commit(
          "notify",
          new Notification({
            classes: ["bg-yellow"],
            text: `${response.status}: ${response.message}`,
          }),
        )

        this.isDeleting = false
      }
    },

    async load() {
      if (this.isLoading) {
        return
      }

      this.isLoading = true

      const response = await this.$store.state.fetcher.post("/db/read", {
        key: "/notes/" + this.id,
      })

      if (response.status === 200) {
        this.note = response.data
      } else {
        this.$store.commit(
          "notify",
          new Notification({
            classes: ["bg-yellow"],
            text: `${response.status}: ${response.message}`,
          }),
        )
      }

      this.isLoading = false
    },

    async save() {
      if (this.isSaving) {
        return
      }

      this.isSaving = true

      const savingNotification = new Notification({ text: `saving...` })
      this.$store.commit("notify", savingNotification)

      this.note.modified = new Date()

      const response = await this.$store.state.fetcher.post("/db/write", {
        key: "/notes/" + this.id,
        value: this.note,
      })

      this.$store.commit("unnotify", savingNotification)

      if (response.status === 200) {
        this.$store.commit(
          "notify",
          new Notification({
            classes: ["bg-turquoise"],
            text: `saved!`,
            ttl: 2000,
          }),
        )
      } else {
        this.$store.commit(
          "notify",
          new Notification({
            classes: ["bg-yellow"],
            text: `${response.status}: ${response.message}`,
          }),
        )
      }

      this.isSaving = false
    },
  },

  async mounted() {
    await this.load()
  },
})

export { NotesEditView }
