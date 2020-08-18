function solution (s) {
  let answer = ''

  for (let i = 0, head = 0; i < s.length; i++, head++) {
    answer += (head % 2 === 0) ? s[i].toUpperCase() : s[i].toLowerCase()
    if (s[i] === ' ') head = -1
  }

  return answer
}
