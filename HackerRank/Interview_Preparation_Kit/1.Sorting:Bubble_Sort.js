function countSwaps (a) {
  let swap = 0
  for (let i = a.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (a[j] >= a[j + 1]) {
        const tmp = a[j + 1]
        a[j + 1] = a[j]
        a[j] = tmp
        swap++
      }
    }
  }
  console.log(`Array is sorted in ${swap} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)
}
