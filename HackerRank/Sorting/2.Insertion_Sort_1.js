function insertionSort1 (n, arr) {
  let i, key
  for (i = n - 2, key = arr[n - 1]; i >= 0 && key < arr[i]; i--) {
    arr[i + 1] = arr[i]
    console.log(...arr)
  }
  arr[i + 1] = key
  console.log(...arr)
}
