import { collapseWhitespace } from "@jrc03c/js-text-tools"
import { execSync } from "node:child_process"
import { Logger } from "@jrc03c/logger"
import { watch } from "@jrc03c/watch"
import * as fsx from "@jrc03c/fs-extras"
import express from "express"
import fs from "node:fs"
import path from "node:path"
import process from "node:process"

const logger = new Logger({ path: "/tmp" })
const PORT = 3000

function buildRSSFeed(data) {
  data = data || {}

  const template = `
    <?xml version="1.0"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
       <channel>
          <title>${data.title}</title>
          <link>${data.url}</link>
          <description>${data.description}</description>
          <language>en-us</language>
          <pubDate>${new Date().toUTCString()}</pubDate>
          <lastBuildDate>Fri, 21 Jul 2023 09:04 EDT</lastBuildDate>
          <docs>https://www.rssboard.org/rss-specification</docs>
          <generator>Blosxom 2.1.2</generator>
          <managingEditor>neil.armstrong@example.com (Neil Armstrong)</managingEditor>
          <webMaster>sally.ride@example.com (Sally Ride)</webMaster>
          <atom:link href="https://www.rssboard.org/files/sample-rss-2.xml" rel="self" type="application/rss+xml" />
          <item>
             <title>Louisiana Students to Hear from NASA Astronauts Aboard Space Station</title>
             <link>http://www.nasa.gov/press-release/louisiana-students-to-hear-from-nasa-astronauts-aboard-space-station</link>
             <description>As part of the state's first Earth-to-space call, students from Louisiana will have an opportunity soon to hear from NASA astronauts aboard the International Space Station.</description>
             <pubDate>Fri, 21 Jul 2023 09:04 EDT</pubDate>
             <guid>http://www.nasa.gov/press-release/louisiana-students-to-hear-from-nasa-astronauts-aboard-space-station</guid>
          </item>
          <item>
             <description>NASA has selected KBR Wyle Services, LLC, of Fulton, Maryland, to provide mission and flight crew operations support for the International Space Station and future human space exploration.</description>
             <link>http://www.nasa.gov/press-release/nasa-awards-integrated-mission-operations-contract-iii</link>
             <pubDate>Thu, 20 Jul 2023 15:05 EDT</pubDate>
             <guid>http://www.nasa.gov/press-release/nasa-awards-integrated-mission-operations-contract-iii</guid>
          </item>
          <item>
             <title>NASA Expands Options for Spacewalking, Moonwalking Suits</title>
             <link>http://www.nasa.gov/press-release/nasa-expands-options-for-spacewalking-moonwalking-suits-services</link>
             <description>NASA has awarded Axiom Space and Collins Aerospace task orders under existing contracts to advance spacewalking capabilities in low Earth orbit, as well as moonwalking services for Artemis missions.</description>
             <enclosure url="http://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/iss068e027836orig.jpg?itok=ucNUaaGx" length="1032272" type="image/jpeg" />
             <pubDate>Mon, 10 Jul 2023 14:14 EDT</pubDate>
             <guid>http://www.nasa.gov/press-release/nasa-expands-options-for-spacewalking-moonwalking-suits-services</guid>
          </item>
          <item>
             <title>NASA to Provide Coverage as Dragon Departs Station</title>
             <link>http://www.nasa.gov/press-release/nasa-to-provide-coverage-as-dragon-departs-station-with-science</link>
             <description>NASA is set to receive scientific research samples and hardware as a SpaceX Dragon cargo resupply spacecraft departs the International Space Station on Thursday, June 29.</description>
             <pubDate>Tue, 20 May 2003 08:56:02 GMT</pubDate>
             <guid>http://www.nasa.gov/press-release/nasa-to-provide-coverage-as-dragon-departs-station-with-science</guid>
          </item>
          <item>
             <title>NASA Plans Coverage of Roscosmos Spacewalk Outside Space Station</title>
             <link>http://liftoff.msfc.nasa.gov/news/2003/news-laundry.asp</link>
             <description>Compared to earlier spacecraft, the International Space Station has many luxuries, but laundry facilities are not one of them.  Instead, astronauts have other options.</description>
             <enclosure url="http://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/spacex_dragon_june_29.jpg?itok=nIYlBLme" length="269866" type="image/jpeg" />
             <pubDate>Mon, 26 Jun 2023 12:45 EDT</pubDate>
             <guid>http://liftoff.msfc.nasa.gov/2003/05/20.html#item570</guid>
          </item>
       </channel>
    </rss>
  `
}

async function buildSearchIndex(options) {
  options = options || {}
  const dir = options.dir || path.join(import.meta.dirname, "dist")
  const include = options.include || [/\.html$/]
  const exclude = options.exclude || []

  const outfile =
    options.outfile ||
    path.join(import.meta.dirname, "dist", "search", "search-index.json")

  const files = fsx.findSync(
    dir,
    f =>
      include.some(pattern => f.match(pattern)) &&
      !exclude.some(pattern => f.match(pattern)),
  )

  const out = files.map(f => {
    return {
      file: f.replace(dir, ""),
      raw: collapseWhitespace(fs.readFileSync(f, "utf8")),
    }
  })

  fs.writeFileSync(outfile, JSON.stringify(out), "utf8")
  return out
}

async function buildSitemap(options) {
  options = options || {}
  const baseUrl = options.baseUrl || "https://ameyama.com"
  const dir = options.dir || path.join(import.meta.dirname, "dist")
  const include = options.include || [/\.html$/]
  const exclude = options.exclude || []

  const outfile =
    options.outfile || path.join(import.meta.dirname, "dist", "sitemap.txt")

  const files = fsx.findSync(
    dir,
    f =>
      include.some(pattern => f.match(pattern)) &&
      !exclude.some(pattern => f.match(pattern)),
  )

  const out = files
    .map(f => f.replace(dir, baseUrl).replace(/index\.html$/, ""))
    .toSorted((a, b) => (a < b ? -1 : 1))

  fs.writeFileSync(outfile, out.join("\n"), "utf8")
  return out
}

async function rebuild() {
  logger.logInfo(`Rebuilding... (${new Date().toLocaleString()})`)

  try {
    execSync(`rm -rf dist`, { encoding: "utf8" })
    execSync(`mkdir -p dist`, { encoding: "utf8" })
    execSync(`npx @11ty/eleventy`, { encoding: "utf8" })

    execSync(
      `
        npx esbuild \
        src/pages/search/search.mjs \
        --bundle \
        --outfile=dist/search/search-bundle.js
      `,
      { encoding: "utf8" },
    )

    execSync(
      `
        npx esbuild \
        src/pages/search/search-worker.mjs \
        --bundle \
        --outfile=dist/search/search-worker-bundle.js
      `,
      { encoding: "utf8" },
    )

    await buildSearchIndex()
    await buildSitemap()
    logger.logSuccess("Done! 🎉")
  } catch (e) {
    console.error(e)
  }
}

if (process.argv.indexOf("-w") > -1 || process.argv.indexOf("--watch") > -1) {
  watch({
    target: ".",
    include: ["eleventy.config.js", "src"],
    created: rebuild,
    modified: rebuild,
    deleted: rebuild,
  })

  const server = express()
  server.use("/", express.static("dist", { extensions: ["html"] }))

  server.listen(PORT, () => {
    logger.logInfo("Visit: http://localhost:" + PORT)
  })
}

rebuild()
