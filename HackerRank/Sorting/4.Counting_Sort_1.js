function countingSort (arr) {
  const sumArr = new Array(100)
  for (let i = 0; i < 100; i++) {
    sumArr[i] = 0
  }

  for (let i = 0; i < arr.length; i++) {
    sumArr[arr[i]]++
  }

  return sumArr
}
