function funnyString (s) {
  for (let i = 0; i < s.length - 1; i++) {
    const r = s.length - (i + 1)
    const a = Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt())
    const b = Math.abs(s[r].charCodeAt() - s[r - 1].charCodeAt())
    if (a !== b) return 'Not Funny'
  }

  return 'Funny'
}
