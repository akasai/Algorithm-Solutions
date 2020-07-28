function leftRotation (d, arr) {
  const cutLimit = d > arr.length ? d - arr.length : d
  const left = arr.slice(0, cutLimit)

  for (let i = 0; i < cutLimit; i++) {
    arr.shift()
  }
  console.log([...arr, ...left].join(' '))
}
