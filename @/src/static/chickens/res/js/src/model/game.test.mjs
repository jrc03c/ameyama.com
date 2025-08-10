import { Chicken } from "./chicken.mjs"
import { expect, test } from "@jrc03c/fake-jest"
import { Game } from "./game.mjs"
import { isEqual, shape } from "@jrc03c/js-math-tools"

test("Game", () => {
  const B = new Chicken({ type: Chicken.Type.BROWN })
  const O = new Chicken({ type: Chicken.Type.ORANGE })
  const W = new Chicken({ type: Chicken.Type.WHITE })
  const Y = new Chicken({ type: Chicken.Type.YELLOW })
  const u = undefined

  !(() => {
    const game = new Game()
    expect(game.gridSize).toBe(6)
    expect(isEqual([game.gridSize, game.gridSize], shape(game.grid))).toBe(true)
    expect(game.state).toBe(Game.State.PLAY)

    expect(
      game.grid.every(row => row.every(v => typeof v === "undefined")),
    ).toBe(true)

    let clearCellEventWasEmitted = false
    let loseEventWasEmitted = false
    let updateEventWasEmitted = false
    let winEventWasEmitted = false

    game.on("clear-cell", () => {
      clearCellEventWasEmitted = true
    })

    game.on("lose", () => {
      loseEventWasEmitted = true
    })

    game.on("update", () => {
      updateEventWasEmitted = true
    })

    game.on("win", () => {
      winEventWasEmitted = true
    })

    game.grid[0][0] = new Chicken({ type: Chicken.Type.BROWN })
    game.grid[0][1] = new Chicken({ type: Chicken.Type.BROWN })
    game.grid[0][2] = new Chicken({ type: Chicken.Type.BROWN })

    game.update()

    expect(clearCellEventWasEmitted).toBe(true)
    expect(updateEventWasEmitted).toBe(true)
    expect(loseEventWasEmitted).toBe(false)
    expect(winEventWasEmitted).toBe(false)
    expect(game.state).toBe(Game.State.PLAY)

    for (let i = 0; i < game.grid.length; i++) {
      for (let j = 0; j < game.grid[i].length; j++) {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            game.grid[i][j] = Chicken.random()
          } else {
            game.grid[i][j] = undefined
          }
        } else {
          if (j % 2 === 0) {
            game.grid[i][j] = undefined
          } else {
            game.grid[i][j] = Chicken.random()
          }
        }
      }
    }

    game.update()

    expect(loseEventWasEmitted).toBe(true)
    expect(winEventWasEmitted).toBe(false)
    expect(game.state).toBe(Game.State.LOSE)
    expect(() => game.generateCandidates()).toThrow()
  })()

  !(() => {
    const game = new Game()
    let same = 0
    let total = 0

    for (let i = 0; i < 10000; i++) {
      const c1 = game.generateCandidates()
      const c2 = game.generateCandidates()
      same += isEqual(c1, c2) ? 1 : 0
      total++
    }

    expect(Math.abs(same / total - 1 / 32)).toBeLessThan(0.1)

    let winEventWasEmitted = false

    game.on("win", () => {
      winEventWasEmitted = true
    })

    game.chickenCount = 0
    game.update()

    expect(winEventWasEmitted).toBe(true)
    expect(game.state).toBe(Game.State.WIN)
  })()

  !(() => {
    const aStart = [
      [B, B, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const aEnd = [
      [B, B, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const bStart = [
      [B, B, B, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const bEnd = [
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const cStart = [
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, B, B, B],
    ]

    const cEnd = [
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const dStart = [
      [W, u, u, u, u, u],
      [W, u, u, u, u, u],
      [W, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const dEnd = [
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const eStart = [
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, W],
      [u, u, u, u, u, W],
      [u, u, u, u, u, W],
    ]

    const eEnd = [
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const fStart = [
      [u, u, u, u, u, u],
      [u, u, Y, u, u, u],
      [u, Y, Y, Y, u, u],
      [u, u, Y, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const fEnd = [
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const gStart = [
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, O, u, u],
      [u, u, u, O, u, u],
      [u, O, O, B, O, O],
      [u, u, u, u, u, u],
    ]

    const gEnd = [
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, u, O, u, u],
      [u, u, u, O, u, u],
      [u, O, O, B, O, O],
      [u, u, u, u, u, u],
    ]

    const hStart = [
      [u, u, u, u, u, u],
      [u, B, B, B, B, u],
      [u, B, W, W, B, u],
      [u, B, W, W, B, u],
      [u, B, B, B, B, u],
      [u, u, u, u, u, u],
    ]

    const hEnd = [
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
      [u, u, W, W, u, u],
      [u, u, W, W, u, u],
      [u, u, u, u, u, u],
      [u, u, u, u, u, u],
    ]

    const pairs = [
      [aStart, aEnd],
      [bStart, bEnd],
      [cStart, cEnd],
      [dStart, dEnd],
      [eStart, eEnd],
      [fStart, fEnd],
      [gStart, gEnd],
      [hStart, hEnd],
    ]

    for (const pair of pairs) {
      const game = new Game()
      game.grid = pair[0]
      game.update()
      expect(isEqual(game.grid, pair[1])).toBe(true)
    }
  })()
})
