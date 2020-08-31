function closestNumbers (arr) {
  arr = arr.sort((a, b) => a - b)

  const ret = []
  let diff = 0
  let head = arr[0]
  let min
  for (let i = 1; i < arr.length; i++) {
    diff = Math.abs(head - arr[i])

    if (diff < min) ret.length = 0

    min = Math.min(min, diff) || diff

    if (diff === min) ret.push(head, arr[i])

    head = arr[i]
  }

  return ret
}
