const lib = require('./lib')

function insertion (arr) {
  console.log('Unsorted', arr)
  for (let i = 1, j; i < arr.length; i++) {
    const key = arr[i] // sorted elements in left side of key
    for (j = i - 1; j >= 0 && arr[j] >= key; j--) {
      arr[j + 1] = arr[j] // shift
    }
    arr[j + 1] = key // SWAP key & last value
    console.log(arr)
  }
  console.log('Sorted', arr)
}

insertion(lib.unsortedArray)

