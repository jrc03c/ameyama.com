import { execSync } from "node:child_process"
import { watch } from "@jrc03c/watch"
import process from "node:process"

function rebuild() {
  console.log("\n-----\n")
  console.log(`Rebuilding... (${new Date().toLocaleString()})`)

  try {
    execSync(
      [
        "npx",
        "esbuild",
        "res/js/src/main.mjs",
        "--bundle",
        "--define:__VUE_OPTIONS_API__=true",
        "--define:__VUE_PROD_DEVTOOLS__=false",
        "--define:__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=false",
        "--outfile=res/js/bundle.js",
      ].join(" "),
      {
        encoding: "utf8",
      },
    )

    console.log("\nDone! 🎉\n")
  } catch (e) {
    console.error(e)
  }
}

if (process.argv.indexOf("-w") > -1 || process.argv.indexOf("--watch") > -1) {
  watch({
    target: "res/js/src",
    exclude: ["bundle.js", "node_modules"],
    created: rebuild,
    modified: rebuild,
    deleted: rebuild,
  })
}

rebuild()
