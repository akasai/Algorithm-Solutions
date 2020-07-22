function countingSort (arr) {
  const sumArr = new Array(100)
  for (let i = 0; i < 100; i++) {
    sumArr[i] = 0
  }

  for (let i = 0; i < arr.length; i++) {
    sumArr[arr[i]]++
  }

  let tmpSum = 0
  for (let i = 0; i < 100; i++) {
    if (sumArr[i] !== 0) {
      sumArr[i] += tmpSum
      tmpSum = sumArr[i]
    }
  }

  const ret = new Array(arr.length)
  for (let i = arr.length - 1; i >= 0; i--) {
    ret[sumArr[arr[i]] - 1] = arr[i]
    sumArr[arr[i]]--
  }
  return ret
}
