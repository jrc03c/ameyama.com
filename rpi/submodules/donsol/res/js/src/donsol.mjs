import { Card } from "./card.mjs"
import { shuffle } from "@jrc03c/js-math-tools"

class Donsol {
  static LOST = "LOST"
  static PLAYING = "PLAYING"
  static WON = "WON"

  static createDeck() {
    const deck = Card.createDeck(true)

    deck.forEach(card => {
      if (card.value > 10) {
        if (card.name === "Joker") {
          card.name = "Joker"
          card.value = 21
        } else if (card.name === "Ace") {
          card.name = "Ace"

          if (card.suit === "Club" || card.suit === "Spade") {
            card.value = 17
          } else {
            card.value = 11
          }
        } else if (card.name === "King") {
          card.name = "King"

          if (card.suit === "Club" || card.suit === "Spade") {
            card.value = 15
          } else {
            card.value = 11
          }
        } else if (card.name === "Queen") {
          card.name = "Queen"

          if (card.suit === "Club" || card.suit === "Spade") {
            card.value = 13
          } else {
            card.value = 11
          }
        } else if (card.name === "Jack") {
          card.name = "Jack"
          card.value = 11
        }
      }
    })

    return deck
  }

  deck = Donsol.createDeck()
  level = 1
  played = []

  player = {
    health: 21,
    healthMax: 21,
    justDrankHealthPotion: false,
    lastCardBlocked: null,
    ranFromLastRoom: false,
    shield: 0,
    shieldMax: 11,
  }

  room = []
  state = Donsol.PLAYING
  unplayed = []

  deal() {
    if (this.state !== Donsol.PLAYING) {
      return
    }

    if (this.unplayed.length === 0) {
      return this.win()
    }

    this.room = []

    for (let i = 0; i < 4; i++) {
      if (this.unplayed.length > 0) {
        const card = this.unplayed.shift()
        this.room.push(card)
        this.played.push(card)
      } else {
        this.room.push(null)
      }
    }

    this.player.justDrankHealthPotion = false
    return this
  }

  lose() {
    if (this.state !== Donsol.PLAYING) {
      return
    }

    this.state = Donsol.LOST
    this.player.health = 0
    this.player.shield = 0
    return this
  }

  reset() {
    this.level = 1
    return this.start()
  }

  run() {
    if (this.state !== Donsol.PLAYING) {
      return
    }

    if (this.player.ranFromLastRoom) {
      return this
    }

    this.player.ranFromLastRoom = true

    this.room.forEach(card => {
      if (card) {
        this.unplayed.push(card)

        if (this.played.includes(card)) {
          this.played.splice(this.played.indexOf(card), 1)
        }
      }
    })

    return this.deal()
  }

  select(card) {
    if (this.state !== Donsol.PLAYING) {
      return
    }

    if (!card) {
      return this
    }

    // health
    if (card.suit === Card.Suit.Heart) {
      if (!this.player.justDrankHealthPotion) {
        this.player.health += card.value

        if (this.player.health > this.player.healthMax) {
          this.player.health = this.player.healthMax
        }

        this.player.justDrankHealthPotion = true
      }
    }

    // shield
    if (card.suit === Card.Suit.Diamond) {
      this.player.shield = card.value

      if (this.player.shield > this.player.shieldMax) {
        this.player.shield = this.player.shieldMax
      }

      this.player.justDrankHealthPotion = false
      this.player.lastCardBlocked = null
    }

    // damage
    if (
      card.suit === Card.Suit.Club
      || card.suit === Card.Suit.Spade
      || card.name === "Joker"
    ) {
      // if the player previously blocked a card:
      if (this.player.lastCardBlocked) {
        // if the card has a higher value than the card the player last blocked:
        if (card.value > this.player.lastCardBlocked.value) {
          // then the player's shield will break, and damage will be applied
          // directly to the player's health
          this.player.shield = 0
          this.player.lastCardBlocked = null
          this.player.health -= card.value

          if (this.player.health <= 0) {
            this.lose()
          }
        }

        // otherwise:
        else {
          // if the card's value is greater than the shield's value:
          if (card.value > this.player.shield) {
            // apply the difference to the player's health
            this.player.health -= (card.value - this.player.shield)

            if (this.player.health <= 0) {
              this.lose()
            }
          }

          // otherwise:
          else {
            // don't do anything because the shield absorbed all of the damage
          }

          // record the fact that this was the last card blocked by the shield
          this.player.lastCardBlocked = card
        }
      }

      // otherwise:
      else {
        // if the player has a shield:
        if (this.player.shield > 0) {
          // if the card value is greater than the shield's value:
          if (card.value > this.player.shield) {
            // apply the difference to the player's health
            this.player.health -= (card.value - this.player.shield)

            if (this.player.health <= 0) {
              this.lose()
            }
          }

          // otherwise:
          else {
            // don't do anything because the shield absorbed all of the damage
          }

          // record the fact that this was the last card blocked by the shield
          this.player.lastCardBlocked = card
        }

        // otherwise:
        else {
          // apply all damage directly to the player's health
          this.player.health -= card.value

          if (this.player.health <= 0) {
            this.lose()
          }
        }
      }

      this.player.justDrankHealthPotion = false
    }

    if (this.room.includes(card)) {
      this.room[this.room.indexOf(card)] = null

      if (this.room.every(card => card === null)) {
        this.deal()
        this.player.ranFromLastRoom = false
      }
    }

    return this
  }

  start() {
    this.played = []
    this.player.health = this.player.healthMax
    this.player.justDrankHealthPotion = false
    this.player.lastCardBlocked = null
    this.player.ranFromLastRoom = false
    this.player.shield = 0
    this.room = []
    this.state = Donsol.PLAYING
    this.unplayed = shuffle(this.deck.slice())
    return this.deal()
  }

  win() {
    if (this.state !== Donsol.PLAYING) {
      return
    }

    this.state = Donsol.WON
    return this
  }
}

export { Donsol }
