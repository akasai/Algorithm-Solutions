function pangrams (s) {
  const lowerString = s.toLowerCase()
  for (let i = 97; i < 97 + 26; i++) {
    if (lowerString.indexOf(String.fromCharCode(i)) < 0) return 'not pangram'
  }
  return 'pangram'
}
