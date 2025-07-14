class Card {
  static Name = {
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "10": "Ten",
    "11": "Jack",
    "12": "Queen",
    "13": "King",
    "14": "Ace",
    "Infinity": "Joker",
  }

  static Suit = {
    Club: "Club",
    Diamond: "Diamond",
    Heart: "Heart",
    None: "None",
    Spade: "Spade",
  }

  static Symbol = {
    Club: "♣",
    Diamond: "♦",
    Heart: "♥",
    None: "∞",
    Spade: "♠",
  }

  static Value = {
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    Six: 6,
    Seven: 7,
    Eight: 8,
    Nine: 9,
    Ten: 10,
    Jack: 11,
    Queen: 12,
    King: 13,
    Ace: 14,
    Joker: Infinity,
  }

  static createDeck(shouldIncludeJokers) {
    const suits = Object.values(this.Suit).filter(v => v !== "None")
    const values = Object.values(this.Value).filter(v => v < Infinity)
    const out = []

    for (const suit of suits) {
      for (const value of values) {
        out.push(new this({ suit, value }))
      }
    }

    if (shouldIncludeJokers) {
      out.push(new this({ value: this.Value.Joker }))
      out.push(new this({ value: this.Value.Joker }))
    }

    return out
  }

  static random() {
    const suits = Object.values(this.Suit)
    const values = Object.values(this.Value)
    const suit = suits[Math.floor(Math.random() * suits.length)]
    const value = values[Math.floor(Math.random() * values.length)]
    return new this({ suit, value })
  }

  _name = null
  _symbol = null
  suit = null
  value = null

  constructor(data) {
    data = data || {}
    this._name = data.name || this._name
    this._symbol = data.symbol || this._symbol
    this.suit = data.suit || this.constructor.Suit.Spade
    this.value = data.value || this.constructor.Value.Ace

    if (this.value === this.constructor.Value.Joker) {
      this.suit = this.constructor.Suit.None
    }
  }

  get id() {
    return `${this.value}-of-${this.suit}s`
  }

  get name() {
    return (
      this._name ? this._name : this.constructor.Name[this.value.toString()]
    )
  }

  set name(value) {
    this._name = value
  }

  get symbol() {
    return this._symbol ? this._symbol : this.constructor.Symbol[this.suit]
  }

  set symbol(value) {
    this._symbol = value
  }
}

export { Card }
