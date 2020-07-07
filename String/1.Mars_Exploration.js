function marsExploration (s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== 'SOS'[i % 3]) count++
  }
  return count
}
