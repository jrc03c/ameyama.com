function debounce(fn, ms) {
  let timeout

  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...arguments), ms)
  }
}

export { debounce }
