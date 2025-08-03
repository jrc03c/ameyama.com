import { install as installStatsSubmodule } from "./submodules/stats/index.mjs"
import { install as installMusicAppSubmodule } from "./submodules/music/back-end/index.mjs"
import express from "express"

const app = express()

installStatsSubmodule(app)
installMusicAppSubmodule(app, "/music")

app.listen(3000, () => {
  console.log("Listening on port 3000...")
})
