class Chicken {
  static Type = {
    BROWN: "BROWN",
    ORANGE: "ORANGE",
    WHITE: "WHITE",
    YELLOW: "YELLOW",
  }

  static random() {
    const types = Object.keys(this.Type)
    const type = types[Math.floor(Math.random() * types.length)]
    return new Chicken({ type })
  }

  type = null

  constructor(data) {
    data = data || {}
    this.type = data.type || this.type
  }
}

export { Chicken }
