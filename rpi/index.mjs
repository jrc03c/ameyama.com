import { install as installStatsSubmodule } from "./submodules/stats/index.mjs"
import { install as installMusicAppSubmodule } from "./submodules/music/back-end/index.mjs"
import express from "express"
import process from "node:process"

if (!process.env.MUSIC_DIR) {
  throw new Error("The environment variable `MUSIC_DIR` is undefined!")
}

const app = express()

installStatsSubmodule(app)
installMusicAppSubmodule(app, "/music", process.env.MUSIC_DIR)

app.listen(3000, () => {
  console.log("Listening on port 3000...")
})
