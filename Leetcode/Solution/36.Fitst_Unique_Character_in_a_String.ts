function firstUniqChar(s: string): number {
  const map = s.split('').reduce((obj: any, s: string) => {
    if (obj[s]) obj[s]++
    else obj[s] = 1
    return obj
  }, {})

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < 2) return i
  }

  return -1
}
