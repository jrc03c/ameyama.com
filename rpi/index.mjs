import { install as installStatsSubmodule } from "./submodules/stats/index.mjs"
import express from "express"

const app = express()

installStatsSubmodule(app)

app.listen(3000, () => {
  console.log("Listening on port 3000...")
})
