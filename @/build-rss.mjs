import { Data } from "@jrc03c/data-class"
import { execSync } from "node:child_process"
import { Liquid } from "liquidjs"
import { urlPathJoin } from "@jrc03c/js-text-tools"
import * as fsx from "@jrc03c/fs-extras"
import fs from "node:fs"
import matter from "gray-matter"
import path from "node:path"
import process from "node:process"

class RssItem extends Data {
  date = ""
  description = ""
  title = ""
  url = ""
}

async function buildRss() {
  const dir = import.meta.dirname
  const srcDir = path.join(dir, "src")
  const distDir = path.join(dir, "dist")

  const siteData = JSON.parse(
    fs.readFileSync(path.join(srcDir, "data", "site.json"), "utf8"),
  )

  const rssSrcFile = path.join(srcDir, "rss.xml")
  const rssDistFile = path.join(distDir, "rss.xml")

  const postsDir = path.join(srcDir, "posts")
  const posts = []

  for (const file of fsx.getFilesDeepIter(postsDir)) {
    if (!file.endsWith(".md")) {
      continue
    }

    const raw = fs.readFileSync(file)
    const { data } = matter(raw)
    const { title } = data

    const dateRaw = file
      .split(path.sep)
      .at(-1)
      .match(/\d\d\d\d-\d\d-\d\d/)[0]

    const date = new Date(dateRaw).toUTCString()
    const url = urlPathJoin(siteData.url, data.permalink)

    posts.push(
      RssItem.new({
        date,
        description: `
          Published / updated blog post:
          <a href="${url}">${url}</a>
        `,
        title,
        url,
      }),
    )
  }

  const pagesDir = path.join(srcDir, "pages")
  const pages = []

  for (const file of fsx.getFilesDeepIter(pagesDir)) {
    if (!file.match(/\.(html|md)$/)) {
      continue
    }

    const stdout = execSync(`git log ${file}`, {
      encoding: "utf8",
    })

    const lines = stdout.split("\n")

    const date = new Date(
      lines
        .find(v => v.trim().startsWith("Date:"))
        .replace("Date:", "")
        .trim(),
    ).toUTCString()

    const raw = fs.readFileSync(file, "utf8")
    const { data } = matter(raw)
    const { title } = data
    const url = urlPathJoin(siteData.url, data.permalink)

    pages.push(
      RssItem.new({
        date,
        description: `
          Published / updated page:
          <a href="${url}">${data.permalink}</a>
        `,
        title,
        url,
      }),
    )
  }

  const payload = {
    items: posts.concat(pages),
    now: new Date().toUTCString(),
    permalink: urlPathJoin(siteData.url, "rss.xml"),
    site: siteData,
  }

  const lq = new Liquid({ strictVariables: true })
  const raw = fs.readFileSync(rssSrcFile, "utf8")
  const out = await lq.parseAndRender(raw, payload)
  fs.writeFileSync(rssDistFile, out, "utf8")
}

export { buildRss }

if (import.meta.url.includes(process.argv[1])) {
  buildRss().then(() => console.log("Done!"))
}
