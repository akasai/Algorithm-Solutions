const unsortedArray = [
  3, 2, 5, 1, 6, 8, 9, 2
]

const SWAP = (a, b) => {
  const tmp = b
  b = a
  a = tmp
}

exports.unsortedArray = unsortedArray
exports.SWAP = SWAP
