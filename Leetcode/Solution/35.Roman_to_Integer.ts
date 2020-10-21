function romanToInt(s: string): number {
  const symbolMap: { [key: string]: number } = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
  let answer = 0
  for (let i = 0; i < s.length; i++) {
    (symbolMap[s[i]] < symbolMap[s[i + 1]]) ? answer -= symbolMap[s[i]] : answer += symbolMap[s[i]]
  }
  return answer
}
