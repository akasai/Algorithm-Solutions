function missingNumbers (arr, brr) {
  const aMap = {}
  const bMap = {}

  for (let i = 0; i < arr.length; i++) {
    if (aMap[arr[i]]) aMap[arr[i]]++
    else aMap[arr[i]] = 1
  }

  for (let i = 0; i < brr.length; i++) {
    if (bMap[brr[i]]) bMap[brr[i]]++
    else bMap[brr[i]] = 1
  }

  const ret = new Set()
  Object.keys(bMap).forEach((key) => {
    if (aMap[key] !== bMap[key] || !aMap[key]) ret.add(key)
  })

  return [...ret]
}
