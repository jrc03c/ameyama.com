import {
  fuzzyFindScore,
  getStats,
  getTFIDFScore,
  strip,
} from "@jrc03c/js-text-tools"

import { mean } from "@jrc03c/js-math-tools"
import { WebWorkerHelper } from "@jrc03c/web-worker-helper"

const worker = new WebWorkerHelper()
let index

worker.on("set-index", async payload => {
  index = payload.map(doc => {
    doc.url = doc.file.replace(/index\.html$/, "")

    doc.title = (() => {
      try {
        return doc.raw
          .match(/<title.*?>.*?<\/title.*?>/gs)[0]
          .replaceAll(/<\/?title.*?>/gs, "")
          .split("|")[0]
          .trim()
      } catch (e) {
        return doc.url
      }
    })()

    doc.titleStats = getStats(strip(doc.title))
    doc.contentStats = getStats(strip(doc.raw))
    return doc
  })
})

worker.on("search", async payload => {
  const query = strip(payload)
  const nGrams = query.split(" ")
  const allTitleStats = []
  const allContentStats = []

  index.forEach(doc => {
    allTitleStats.push(doc.titleStats)
    allContentStats.push(doc.contentStats)
  })

  return index
    .map(doc => {
      doc.score =
        (1 / 3) *
          mean(
            nGrams.map(v =>
              getTFIDFScore(v, doc.contentStats, allContentStats),
            ),
          ) +
        (1 / 3) * fuzzyFindScore(query, [doc.titleStats])[0].score +
        (1 / 3) * fuzzyFindScore(query, [doc.contentStats])[0].score

      return doc
    })
    .toSorted((a, b) => b.score - a.score)
})
