function freqAlphabets(s: string): string {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    const ascii = 96 + +(s[i + 2] === '#' ? (i += 2, s[i - 2] + s[i - 1]) : s[i])
    str += String.fromCharCode(ascii)
  }
  return str
}
