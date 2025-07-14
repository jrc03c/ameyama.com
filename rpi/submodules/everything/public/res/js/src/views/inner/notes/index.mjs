// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .x-notes-view .x-sortable-table .head,
  .x-notes-view .x-sortable-table .body > * {
    padding-top: var(--spacing-xs);
    padding-bottom: var(--spacing-xs);
  }

  .x-notes-view .x-sortable-table .head > *:first-child,
  .x-notes-view .x-sortable-table .body > * > *:first-child {
    width: 100%;
    flex-shrink: 999999;
  }

  .x-notes-view .x-sortable-table .head > *:nth-child(2),
  .x-notes-view .x-sortable-table .head > *:nth-child(3),
  .x-notes-view .x-sortable-table .body > * > *:nth-child(2),
  .x-notes-view .x-sortable-table .body > * > *:nth-child(3){
    width: 25%;
  }

  .x-notes-view .x-sortable-table .head > *:nth-child(4),
  .x-notes-view .x-sortable-table .body > * > *:nth-child(4) {
    width: 15%;
  }

  .x-notes-view .note-boxes {
    display: none;
  }

  .x-notes-view .note-boxes .note-box-property {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    gap: 0;
  }

  .x-notes-view .note-boxes .note-box-property > *:first-child {
    min-width: 6rem;
  }

  .x-notes-view .note-boxes .note-box-property > *:nth-child(2) {
    margin-left: var(--spacing);
  }

  @media (max-width: 768px) {
    .x-notes-view .x-sortable-table {
      display: none;
    }

    .x-notes-view .note-boxes {
      display: block;
    }
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-notes-view">
    <div class="row">
      <h1>notes</h1>

      <div>
        <button
          :disabled="isCreatingNewNote || isWorking"
          @click="createNewNote"
          class="bg-turquoise">
          {{ isCreatingNewNote ? "creating..." : "new note" }}
        </button>
      </div>
    </div>

    <div style="color: var(--color-grey-5);" v-if="isLoading">
      Loading...
    </div>

    <div v-else>
      <x-sortable-table
        :sortable="['title', 'created', 'modified']"
        sort-by="title"
        v-if="notes && notes.length > 0">
        <template v-slot:head>
          <div>title</div>
          <div>created</div>
          <div>modified</div>
          <div style="text-align: right">actions</div>
        </template>

        <template v-slot:body>
          <div v-for="note in notes">
            <div>
              <router-link :to="'/app/notes/edit/' + note.id">
                {{ note.title }}
              </router-link>
            </div>

            <div>{{ prettifyDate(note.created) }}</div>
            <div>{{ prettifyDate(note.modified) }}</div>

            <div style="text-align: right">
              <button class="bg-pink" @click="deleteNote(note)">delete</button>
            </div>
          </div>
        </template>
      </x-sortable-table>

      <div class="note-boxes">
        <div :key="i" class="box" v-for="(note, i) in notes">
          <div class="note-box-property">
            <b>title:</b>

            <router-link :to="'/app/notes/edit/' + note.id">
              {{ note.title }}
            </router-link>
          </div>

          <div class="note-box-property">
            <b>created:</b>
            <span>{{ prettifyDate(note.created) }}</span>
          </div>

          <div class="note-box-property">
            <b>modified:</b>
            <span>{{ prettifyDate(note.modified) }}</span>
          </div>

          <hr>

          <div>
            <button @click="deleteNote(note)" class="bg-pink">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { Note } from "./note.mjs"
import { Notification } from "../../../components/notification-manager/notification.mjs"
import { prettifyDate } from "../../../utils/prettify-date.mjs"
import { SortableTable } from "../../../components/sortable-table/index.mjs"

const NotesView = createVueComponentWithCSS({
  name: "x-notes-view",

  components: {
    "x-sortable-table": SortableTable,
  },

  template,

  data() {
    return {
      css,
      isCreatingNewNote: false,
      isLoading: false,
      isWorking: false,
      notes: [],
    }
  },

  methods: {
    async createNewNote() {
      if (this.isCreatingNewNote || this.isWorking) {
        return
      }

      this.isCreatingNewNote = true
      this.isWorking = true
      const note = new Note()

      const response = await this.$store.state.fetcher.post("/db/write", {
        email: this.$store.state.email,
        key: "/notes/" + note.id,
        value: note,
      })

      if (response.status === 200) {
        this.$router.push("/app/notes/edit/" + note.id)
      } else if (response.status === 401) {
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

      this.isCreatingNewNote = false
      this.isWorking = false
    },

    async deleteNote(note) {
      const shouldDelete = confirm(
        `the note "${note.title}" will be irreversibly deleted. are you sure you want to continue?`,
      )

      if (!shouldDelete) {
        return
      }

      const response = await this.$store.state.fetcher.post("/db/write", {
        key: "/notes/" + note.id,
        value: null,
      })

      if (response.status === 200) {
        this.notes.splice(this.notes.indexOf(note), 1)

        this.$store.commit(
          "notify",
          new Notification({
            classes: ["bg-pink"],
            text: "Deleted!",
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
    },

    async load() {
      if (this.isLoading) {
        return
      }

      this.isLoading = true

      const response = await this.$store.state.fetcher.post("/db/read", {
        email: this.$store.state.email,
        key: "/notes",
        excluded: ["text"],
      })

      if (response.status === 200) {
        this.notes = Object.keys(response.data || {}).map(
          key => response.data[key],
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

      this.isLoading = false
    },

    prettifyDate,
  },

  async mounted() {
    await this.load()
  },
})

export { NotesView }
