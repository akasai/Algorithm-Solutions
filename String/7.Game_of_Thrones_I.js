function gameOfThrones (s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) map[s[i]]++
    else map[s[i]] = 1
  }

  let evenCnt = 0
  for (const m in map) {
    if (map[m] % 2 !== 0) evenCnt++
  }

  return evenCnt > 1 ? 'NO' : 'YES'
}
