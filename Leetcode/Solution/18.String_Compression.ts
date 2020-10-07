function compress(chars: string[]): number {
  let str = chars[0]
  let cnt = 1

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === str[str.length - 1]) {
      cnt++
    } else {
      if (cnt > 1) str += cnt.toString()
      str += chars[i]
      cnt = 1
    }
  }

  if (cnt > 1) str += cnt.toString()
  chars.length = 0
  chars.push(...str.split(''))
  return chars.length
}
