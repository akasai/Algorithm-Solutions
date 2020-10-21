function titleToNumber(s: string): number {
  let answer = 0
  for (let i = s.length - 1, carry = 1; i >= 0; i--, carry *= 26) {
    const num = s.charCodeAt(i) - 64
    answer += num * carry
  }
  return answer
}
