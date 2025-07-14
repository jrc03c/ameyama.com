import { Card } from "./res/js/src/card.mjs"
import { Donsol } from "./res/js/src/donsol.mjs"
import { fg, fx } from "@jrc03c/bash-colors"
import { prompt } from "@jrc03c/prompt"
import process from "node:process"

class DonsolCLI extends Donsol {
  lose() {
    super.lose()
    console.log(fg.yellow("YOU DIED! 💀"))
    process.exit()
  }

  win() {
    super.win()
    console.log(fg.green("YOU WON! ⚔️"))
    process.exit()
  }
}

!(async () => {
  const game = new DonsolCLI()
  game.reset()

  while (true) {
    const width = Math.min(80, process.stdout.columns)
    const widthForLabels = "health: (21/21)".length - 1
    const widthForBar = width - widthForLabels

    const progress = game.played.length / game.deck.length
    const widthForProgress = Math.round(widthForBar * progress)

    const widthForHealth = Math.round(
      widthForBar * game.player.health / game.player.healthMax,
    )

    const widthForShield = Math.round(
      widthForBar * game.player.shield / game.player.shieldMax,
    )

    const char = "="

    console.log("")

    console.log(
      `progress: (${
        Math.round(100 * progress).toString().padStart(2, "0")
      }%)`.padEnd(
        widthForLabels,
        " ",
      ),
      fg.yellow(char.repeat(widthForProgress))
      + fx.dim(char.repeat(widthForBar - widthForProgress)),
    )

    console.log(
      `health: (${
        game.player.health.toString().padStart(2, "0")
      }/${game.player.healthMax})`.padEnd(
        widthForLabels,
        " ",
      ),
      fg.red(char.repeat(widthForHealth))
      + fx.dim(char.repeat(widthForBar - widthForHealth)),
    )

    console.log(
      `shield: (${
        game.player.shield.toString().padStart(2, "0")
      }/${game.player.shieldMax})`.padEnd(
        widthForLabels,
        " ",
      ),
      fg.red(char.repeat(widthForShield))
      + fx.dim(char.repeat(widthForBar - widthForShield)),
    )

    console.log(
      "last blocked:".padEnd(widthForLabels + 1, " "),
      game.player.lastCardBlocked
      ? game.player.lastCardBlocked.value
      : "(none)",
    )

    console.log("")

    for (let i = 0; i < game.room.length; i++) {
      const card = game.room[i]

      if (card) {
        let { value } = card

        if (value > 10) {
          value = card.name.toLowerCase()
        }

        const label = `${card.symbol} ${value} (${card.value})`

        console.log(
          i + 1 + ")",
          card.suit === Card.Suit.Club || card.suit === Card.Suit.Spade
          ? fx.dim(label)
          : card.name === "Joker"
            ? fg.cyan(label)
            : fg.red(label),
        )
      } else {
        console.log(i + 1 + ")")
      }
    }

    let response = (await prompt("\nselect a card (or type 'run'):")).trim()

    if (response === "run") {
      game.run()
    } else {
      try {
        response = parseInt(response)
      } catch(e) {}

      if (
        response
        && typeof response === "number"
        && response >= 1
        && response <= 4
      ) {
        response -= 1
        const card = game.room[response]
        game.select(card)
      }
    }
  }
})()
