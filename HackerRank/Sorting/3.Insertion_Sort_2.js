function insertionSort2 (n, arr) {
  for (let i = 1, j; i < n; i++) {
    const key = arr[i]
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = key
    console.log(...arr)
  }
}
