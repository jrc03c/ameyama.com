import { Chicken } from "./chicken.mjs"
import { expect, test } from "@jrc03c/fake-jest"

test("Chicken", () => {
  const c = new Chicken()
  expect(c.type).toBe(null)

  for (let i = 0; i < 100; i++) {
    const c = Chicken.random()

    expect(
      c.type === Chicken.Type.BROWN ||
        c.type === Chicken.Type.ORANGE ||
        c.type === Chicken.Type.WHITE ||
        c.type === Chicken.Type.YELLOW,
    ).toBe(true)
  }
})
