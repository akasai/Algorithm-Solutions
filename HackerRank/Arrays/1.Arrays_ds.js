function reverseArray (a) {
  const len = a.length
  const tmp = new Array(len)

  for (let i = len - 1; i >= 0; i--) {
    tmp[len - i - 1] = a[i]
  }
  return tmp
}
