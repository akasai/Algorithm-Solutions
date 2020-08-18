function makingAnagrams (s1, s2) {
  const hashFn = (str) => str.split('').reduce((map, str) => {
    if (map[str]) map[str]++
    else map[str] = 1
    return map
  }, {})

  const s1Map = hashFn(s1)
  const s2Map = hashFn(s2)

  for (const k in s1Map) {
    if (s2Map[k]) {
      if (s1Map[k] >= s2Map[k]) {
        s1Map[k] -= s2Map[k]
        s2Map[k] = 0
      } else {
        s2Map[k] -= s1Map[k]
        s1Map[k] = 0
      }
    }
  }

  return [...Object.values(s1Map), ...Object.values(s2Map)].reduce((sum, v) => sum + v, 0)
}
