function caesarCipher (s, k) {
  let ret = ''
  for (let i = 0; i < s.length; i++) {
    if (!/[a-zA-Z]/.test(s[i])) {
      ret += s[i]
    } else {
      const ascii = s[i].charCodeAt()
      let index = ascii + k
      if (ascii >= 65 && ascii < 91) {
        while (index > 90) {
          index = index - 91 + 65
        }
      } else if (ascii >= 97 && ascii < 123) {
        while (index > 122) {
          index = index - 123 + 97
        }
      }
      ret += String.fromCharCode(index)
    }
  }
  return ret
}
