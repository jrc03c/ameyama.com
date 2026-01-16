import { install as installMediaSubmodule } from "./submodules/media/index.mjs"
// import { install as installMusicAppSubmodule } from "./submodules/music/back-end/index.mjs"
// import { install as installStatsSubmodule } from "./submodules/stats/index.mjs"
import express from "express"
import process from "node:process"

// if (!process.env.MUSIC_SETTINGS_DIR) {
//   throw new Error("The environment variable `MUSIC_SETTINGS_DIR` is undefined!")
// }
//
// if (!process.env.MUSIC_DIR) {
//   throw new Error("The environment variable `MUSIC_DIR` is undefined!")
// }

const app = express()

installMediaSubmodule(app)

// installMusicAppSubmodule(
//   app,
//   "/music",
//   process.env.MUSIC_SETTINGS_DIR,
//   process.env.MUSIC_DIR,
// )
//
// installStatsSubmodule(app)

app.listen(3000, () => {
  console.log("Listening on port 3000...")
})
