function prettifyDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  const year = date.getFullYear().toString().padStart(4, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const day = date.getDate().toString().padStart(2, "0")
  const hour = (date.getHours() % 12).toString().padStart(2, "0")
  const minute = date.getMinutes().toString().padStart(2, "0")
  const ampm = date.getHours() < 12 ? "AM" : "PM"

  return `${year}-${month}-${day} ${hour}:${minute} ${ampm}`
}

export { prettifyDate }
