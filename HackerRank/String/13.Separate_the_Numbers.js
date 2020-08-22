function separateNumbers (s) {
  if (s.length === 1) {
    console.log('NO')
    return
  }

  for (let i = 1; i < (s.length / 2) + 1; i++) {
    const key = s.slice(0, i)
    let str = key

    for (let j = 1; str.length < s.length; j++) {
      const a = BigInt(key)
      const b = BigInt(j)
      str += (a + b).toString()
    }

    if (str === s) {
      console.log('YES', key)
      return
    }
  }
  console.log('NO')
}
