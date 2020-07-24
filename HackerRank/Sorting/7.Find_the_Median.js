function findMedian (arr) {
  const median = parseInt(arr.length / 2)
  for (let i = 1, j; i < arr.length; i++) {
    const key = arr[i]
    for (j = i - 1; j >= 0 && key > arr[j]; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = key
  }
  return arr[median]
}
