function alternatingCharacters (s) {
  let pivot = s[0]
  let deletion = 0
  for (let i = 1; i < s.length; i++) {
    if (s[i] === pivot) deletion++
    else pivot = s[i]
  }

  return deletion
}
