import { rebuild as rebuildLockedTombSubmodule } from "./submodules/locked-tomb/build.mjs"

async function rebuild() {
  await rebuildLockedTombSubmodule()
}

rebuild()
