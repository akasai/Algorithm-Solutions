const lib = require('./lib')

function counting (arr) {
  console.log('Unsorted', arr)
  const sumMap = new Array(Math.max(...arr) + 1) // Size of Array is Maximum number of arr

  // initialize sumMap Array
  for (let i = 0; i < sumMap.length; i++) {
    sumMap[i] = 0
  }
  console.log(sumMap)

  // count elements in arr
  for (let i = 0; i < arr.length; i++) {
    sumMap[arr[i]]++
  }
  console.log(sumMap)

  // calculate Cumulative Sum
  let addition = sumMap[0]
  for (let i = 1; i < sumMap.length; i++) {
    if (sumMap[i]) {
      sumMap[i] += addition
      addition = sumMap[i]
    }
  }
  console.log(sumMap)

  // sorting arr using sumMap
  const result = new Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    result[sumMap[arr[i]] - 1] = arr[i]
    sumMap[arr[i]]--
  }
  console.log('Sorted', result)
}

counting(lib.unsortedArray)
