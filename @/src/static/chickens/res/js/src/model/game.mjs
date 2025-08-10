import { BaseClass } from "@jrc03c/base-class"
import { Chicken } from "./chicken.mjs"
import { set } from "@jrc03c/js-math-tools"

class Game extends BaseClass {
  static Orientation = {
    HORIZONTAL: "HORIZONTAL",
    VERTICAL: "VERTICAL",

    get RANDOM() {
      return (
        Math.random() < 0.5
        ? Game.Orientation.HORIZONTAL
        : Game.Orientation.VERTICAL
      )
    },
  }

  static State = {
    LOSE: "LOSE",
    PLAY: "PLAY",
    WIN: "WIN",
  }

  candidates = {
    0: Chicken.random(),
    1: Chicken.random(),
    orientation: Game.Orientation.RANDOM,
  }

  chickenCount = 368
  grid = []
  gridSize = 6
  state = Game.State.PLAY

  constructor(data) {
    super(...arguments)
    data = data || {}

    this.gridSize = data.gridSize || this.gridSize
    this.state = data.state || this.state

    if (data.grid) {
      this.grid = data.grid.map(row => row.map(v => new Chicken(v)))
    } else {
      for (let i = 0; i < this.gridSize; i++) {
        const row = []

        for (let j = 0; j < this.gridSize; j++) {
          row.push(undefined)
        }

        this.grid.push(row)
      }
    }
  }

  generateCandidates() {
    const openIndexPairs = this.getOpenIndexPairs()

    if (openIndexPairs.length === 0) {
      throw new Error("There are no open index pairs!")
    }

    const { orientation } = openIndexPairs[
      Math.floor(Math.random() * openIndexPairs.length)
    ]

    this.candidates = {
      0: Chicken.random(),
      1: Chicken.random(),
      orientation,
    }

    return this.candidates
  }

  getOpenIndexPairs() {
    const out = []

    for (let i = 0; i < this.grid.length - 1; i++) {
      for (let j = 0; j < this.grid[i].length - 1; j++) {
        if (!this.grid[i][j]) {
          if (!this.grid[i][j + 1]) {
            out.push({
              0: [i, j],
              1: [i, j + 1],
              orientation: Game.Orientation.HORIZONTAL,
            })
          }

          if (!this.grid[i + 1][j]) {
            out.push({
              0: [i, j],
              1: [i + 1, j],
              orientation: Game.Orientation.VERTICAL,
            })
          }
        }
      }
    }

    return out
  }

  lose() {
    this.state = Game.State.LOSE
    this.emit("lose")
    return this
  }

  update() {
    // look for groups of 3 to remove
    const groupsToRemove = []

    // horizontal
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length - 2; j++) {
        if (
          this.grid[i][j]
          && this.grid[i][j + 1]
          && this.grid[i][j + 2]
          && this.grid[i][j].type === this.grid[i][j + 1].type
          && this.grid[i][j].type === this.grid[i][j + 2].type
        ) {
          groupsToRemove.push([[i, j], [i, j + 1], [i, j + 2]])
        }
      }
    }

    // vertical
    for (let i = 0; i < this.grid.length - 2; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (
          this.grid[i][j]
          && this.grid[i + 1][j]
          && this.grid[i + 2][j]
          && this.grid[i][j].type === this.grid[i + 1][j].type
          && this.grid[i][j].type === this.grid[i + 2][j].type
        ) {
          groupsToRemove.push([[i, j], [i + 1, j], [i + 2, j]])
        }
      }
    }

    const removed = new Set()

    groupsToRemove.forEach(group => {
      group.forEach(index => {
        const [i, j] = index
        this.grid[i][j] = undefined
        removed.add([i, j])
        this.emit("clear-cell", { i, j })
      })
    })

    this.chickenCount -= removed.size

    if (this.chickenCount <= 0) {
      return this.win()
    }

    // if no groups were removed, then check to see if the board is full
    if (groupsToRemove.length === 0) {
      const openIndexPairs = this.getOpenIndexPairs()

      if (openIndexPairs.length === 0) {
        return this.lose()
      }
    }

    this.emit("update")
    return this
  }

  win() {
    this.chickenCount = 0
    this.state = Game.State.WIN
    this.emit("win")
    return this
  }
}

export { Game }
