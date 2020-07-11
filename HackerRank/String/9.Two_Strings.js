function twoStrings (s1, s2) {
  const target = new Set(s1)

  for (const t of target) {
    if (s2.includes(t)) return 'YES'
  }

  return 'NO'
}
