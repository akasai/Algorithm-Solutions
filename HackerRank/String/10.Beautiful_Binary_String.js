function beautifulBinaryString (b) {
  const tmp = b.split('')
  let count = 0
  for (let i = 2; i < tmp.length; i++) {
    if (tmp[i - 2] === '0' && tmp[i - 1] === '1' && tmp[i] === '0') {
      tmp[i] = '1'
      count++
    }
  }

  return count
}
