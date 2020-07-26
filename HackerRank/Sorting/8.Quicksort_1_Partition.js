function quickSort (arr) {
  const left = []
  const right = []
  const pivot = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) right.push(arr[i])
    else left.push(arr[i])
  }

  return [...left, pivot, ...right]
}
