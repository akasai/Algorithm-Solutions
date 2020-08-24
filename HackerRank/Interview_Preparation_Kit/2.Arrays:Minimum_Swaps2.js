function minimumSwaps (arr) {
  let count = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === i + 1) {
        break
      }

      if (arr[j] === i + 1) {
        const tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
        count++
      }
    }
  }

  return count
}
