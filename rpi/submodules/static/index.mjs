import { default as matter } from "gray-matter"
import { Liquid } from "liquidjs"
import express from "express"
import fs from "node:fs"
import MarkdownIt from "markdown-it"
import path from "node:path"

function render(raw, data, inline) {
  const md = new MarkdownIt({ html: true })
  const liquid = new Liquid()
  let out = liquid.parseAndRenderSync(raw, data)
  out = inline ? md.renderInline(out) : md.render(out)
  out = out.replaceAll("---", "—")
  return out
}

async function install(app, logger) {
  const dir = import.meta.dirname
  const publicDir = path.join(dir, "public")
  const defaultHandler = express.static(publicDir, { extensions: ["html"] })
  const middleware = express()

  middleware.use((request, response, next) => {
    try {
      const templateFile = path.join(dir, "template.html")
      const template = fs.readFileSync(templateFile, "utf8")
      const target = path.join(publicDir, ...request.path.split("/"))

      // render markdown files
      if (request.path.endsWith(".md")) {
        if (fs.existsSync(target)) {
          const raw = fs.readFileSync(target, "utf8")
          const data = matter(raw)

          const renderedTitle = render(
            data.data && data.data.title ? data.data.title : "Untitled",
            true,
          )

          const renderedBody = render(data.content)

          const out = template
            .replaceAll("{{ title }}", renderedTitle)
            .replaceAll("{{ content }}", renderedBody)

          return response.send(out)
        } else {
          return response.status(404).send("File not found. 😥")
        }
      }

      // return raw markdown files
      if (request.path.endsWith(".md/raw")) {
        const file = target.replace(/\/raw$/, "")

        if (fs.existsSync(file)) {
          return response.send(fs.readFileSync(file, "utf8"))
        } else {
          return response.status(404).send("File not found. 😥")
        }
      }

      // create directory indices
      if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
        const children = fs
          .readdirSync(target)
          .toSorted((a, b) => (a < b ? -1 : 1))

        const childDirLis = []
        const childFileLis = []

        children.forEach(child => {
          if (fs.statSync(path.join(target, child)).isDirectory()) {
            childDirLis.push(
              `
                <li class="folder">
                  <a href="${path.join(request.path, child)}">
                    ${child}
                  </a>
                </li>
              `.trim(),
            )
          } else {
            childFileLis.push(
              `
                <li class="file">
                  <a href="${path.join(request.path, child)}">
                    ${child}
                  </a>
                </li>
              `.trim(),
            )
          }
        })

        const title = [`<a href="/">$root</a>`]
          .concat(
            request.path
              .split("/")
              .map(v => v.trim())
              .filter(v => !!v)
              .map((p, i, arr) => {
                return `
                  <a href="/${arr.slice(0, i + 1).join("/")}">${p}</a>
                `
              }),
          )
          .join(" / ")

        const parentDir = request.path.split("/").slice(0, -1).join("/") || "/"

        const parentLi = `
          <li class="folder">
            <a href="${parentDir}">
              ..
            </a>
          </li>
        `.trim()

        const lis = [parentLi].concat(childDirLis).concat(childFileLis)

        const out = template
          .replaceAll("{{ title }}", title)
          .replaceAll("{{ content }}", `<ul>${lis.join("\n")}</li>`)

        return response.send(out)
      }

      // let express.static handle everything else
      return next()
    } catch (e) {
      logger.logError(e)
      return response.status(500).send(JSON.stringify(e))
    }
  })

  app.use("/", middleware, defaultHandler)
  return middleware
}

export { install }
