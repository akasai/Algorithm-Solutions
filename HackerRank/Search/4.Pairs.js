function pairs (k, arr) {
  arr = arr.sort((a, b) => b - a)
  let i = 0
  let j = 1
  let count = 0

  while (j < arr.length) {
    const gap = arr[i] - arr[j]
    if (gap === k) {
      count++
      j++
    } else if (gap < k) {
      j++
    } else if (gap > k) {
      i++
    }
  }

  return count
}
