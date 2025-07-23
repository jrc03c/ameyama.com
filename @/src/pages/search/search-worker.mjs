import {
  collapseWhitespace,
  fuzzyFindScore,
  getStats,
  strip,
} from "@jrc03c/js-text-tools"

import { mean } from "@jrc03c/js-math-tools"
import { WebWorkerHelper } from "@jrc03c/web-worker-helper"

function extractTitle(x) {
  try {
    return x
      .match(/<title.*?>.*?<\/title.*?>/gs)[0]
      .replaceAll(/<\/?title.*?>/gs, "")
      .split("|")[0]
      .trim()
  } catch (e) {}
}

function getBM25Score(nGrams, stats, allStats, k1, b) {
  k1 = k1 || 1.6
  b = b || 0.75

  const meanDocLength = mean(allStats.map(s => s.nGrams.length))

  return mean(
    nGrams.map(
      nGram =>
        (getIDFScore(nGram, allStats) * (stats.nGramCounts[nGram] * (k1 + 1))) /
        (stats.nGramCounts[nGram] +
          k1 * (1 - b + (b * stats.nGrams.length) / meanDocLength)),
    ),
  )
}

function getExcerpt(raw, matches) {
  const padding = 32
  const chunks = []

  for (const match of matches) {
    const index = raw.indexOf(match)
    const indices = [index]
    const words = [match]
    let start = Math.max(index - padding, 0)
    let end = Math.min(index + match.length + padding, raw.length)

    while (start > 0 && !raw[start].match(/\s/)) {
      start--
    }

    while (end < raw.length - 1 && !raw[end].match(/\s/)) {
      end++
    }

    if (chunks.length > 0) {
      const last = indices.at(-1)

      if (start < last.end) {
        last.indices.push(index)
        last.words.push(match)
        last.end = end
      } else {
        chunks.push({ indices, words, start, end })
      }
    } else {
      chunks.push({ indices, words, start, end })
    }
  }

  let out = []

  for (const chunk of chunks) {
    let temp = raw.slice(chunk.start, chunk.indices[0])

    for (let i = 0; i < chunk.indices.length; i++) {
      temp +=
        "<b>" +
        raw.slice(chunk.indices[i], chunk.indices[i] + chunk.words[i].length) +
        "</b>"

      if (i < chunk.indices.length - 1) {
        const next = chunk.indices[i + 1]
        temp += raw.slice(chunk.indices[i] + chunk.words[i].length, next)
      } else {
        temp += raw.slice(chunk.indices[i] + chunk.words[i].length, chunk.end)
      }
    }

    out.push(temp)
  }

  return collapseWhitespace("... " + out.join(" ... ") + " ...")
}

function getIDFScore(nGram, allStats) {
  const n = allStats.filter(s => s.nGramCounts[nGram] > 0).length
  return Math.log((allStats.length - n + 0.5) / (n + 0.5) + 1)
}

function removeHtml(x) {
  return x.replaceAll(/<.*?>/gs, "")
}

const worker = new WebWorkerHelper()
let index

worker.on("set-index", async payload => {
  index = payload
})

worker.on("search", async payload => {
  const query = payload
  const queryNGrams = getStats(strip(payload)).nGramSet
  const allStats = index.map(doc => getStats(strip(doc.raw)))

  return index
    .map((doc, i) => {
      const url = doc.file.replace(/index\.html$/, "")
      const rawWithoutHtml = removeHtml(doc.raw)
      const fuzzyResult = fuzzyFindScore(query, [getStats(rawWithoutHtml)])[0]
      let score = getBM25Score(queryNGrams, allStats[i], allStats)

      if (isNaN(score) && fuzzyResult.score > 0.8) {
        score = fuzzyResult.score
      }

      return {
        url,
        title: extractTitle(doc.raw) || url,
        score,
        matches: fuzzyResult.matches,
        excerpt: isNaN(score)
          ? ""
          : getExcerpt(rawWithoutHtml, fuzzyResult.matches),
      }
    })
    .filter(v => !isNaN(v.score))
    .toSorted((a, b) => b.score - a.score)
})
