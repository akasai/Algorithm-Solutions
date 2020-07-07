function hackerrankInString (s) {
  const term = 'hackerrank'.split('')
  for (let i = 0; i < s.length; i++) {
    if (term[0] === s[i]) term.shift()
  }
  return !term.length ? 'YES' : 'NO'
}
