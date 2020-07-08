function theLoveLetterMystery (s) {
  const len = s.length
  let count = 0
  for (let i = 0, j = len - 1; i < len / 2; i++, j--) {
    if (s[i] !== s[j]) {
      const f = s[i].charCodeAt()
      const b = s[j].charCodeAt()
      count += Math.abs(f - b)
    }
  }

  return count
}
