function runningTime (arr) {
  let count = 0
  for (let i = 1, j; i < arr.length; i++) {
    const key = arr[i]
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j]
      count++
    }
    arr[j + 1] = key
  }
  return count
}
