import { afterAll, expect, test } from "@jrc03c/fake-jest"
import { FileDB } from "@jrc03c/filedb"
import { PasswordManager } from "./password-manager.mjs"
import { randomString } from "@jrc03c/js-crypto-helpers"
import * as fsx from "@jrc03c/fs-extras"
import fs from "node:fs"
import path from "node:path"

const dirs = []

afterAll(() => {
  dirs.forEach(d => fs.rmSync(d, { force: true, recursive: true }))
})

test("tests that the `PasswordManager` class works as expected", async () => {
  const dir = path.join(import.meta.dirname, randomString(8))
  dirs.push(dir)

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  const db = new FileDB({ path: dir })
  const passman = new PasswordManager({ db, timeBetweenChecks: 1000 })
  const email = "someone@example.com"
  const password1 = randomString(32)
  const password2 = randomString(32)

  expect(await passman.hasPassword(email)).toBe(false)

  await passman.setPassword(email, password1)

  expect(await passman.hasPassword(email)).toBe(true)

  await (async () => {
    const start = performance.now()
    expect(await passman.passwordIsCorrect(email, password1)).toBe(true)

    expect(performance.now() - start).toBeLessThan(
      passman.timeBetweenChecks / 4,
    )
  })()

  await (async () => {
    const start = performance.now()
    expect(await passman.passwordIsCorrect(email, password1)).toBe(true)

    expect(performance.now() - start).toBeGreaterThanOrEqualTo(
      passman.timeBetweenChecks,
    )
  })()

  await (async () => {
    const start = performance.now()
    expect(await passman.passwordIsCorrect(email, password2)).toBe(false)

    expect(performance.now() - start).toBeGreaterThanOrEqualTo(
      passman.timeBetweenChecks,
    )
  })()

  await (async () => {
    const start = performance.now()
    expect(await passman.passwordIsCorrect(email, randomString(32))).toBe(false)

    expect(performance.now() - start).toBeGreaterThanOrEqualTo(
      passman.timeBetweenChecks,
    )
  })()

  await (async () => {
    const start = performance.now()
    expect(await passman.passwordIsCorrect(email, password1)).toBe(true)

    expect(performance.now() - start).toBeGreaterThanOrEqualTo(
      passman.timeBetweenChecks,
    )
  })()

  expect(
    fsx.findSync(dir, f => {
      if (fs.statSync(f).isDirectory()) {
        return false
      }

      const raw = fs.readFileSync(f, "utf8")
      return raw.includes(password1) || raw.includes(password1)
    }).length,
  ).toBe(0)

  await passman.setPassword(email, password2)

  expect(await passman.passwordIsCorrect(email, password1)).toBe(false)
  expect(await passman.passwordIsCorrect(email, password2)).toBe(true)

  expect(
    fsx.findSync(dir, f => {
      if (fs.statSync(f).isDirectory()) {
        return false
      }

      const raw = fs.readFileSync(f, "utf8")
      return raw.includes(password1) || raw.includes(password1)
    }).length,
  ).toBe(0)

  expect(await passman.hasPassword(email)).toBe(true)
  await passman.deleteAccount(email)
  expect(await passman.hasPassword(email)).toBe(false)
})
