function rotLeft (a, d) {
  const len = a.length
  const shift = len - d
  const ret = new Array(len)
  for (let i = 0; i < len; i++) {
    ret[(i + shift) % len] = a[i]
  }
  return ret
}
