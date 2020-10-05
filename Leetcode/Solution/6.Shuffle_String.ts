function restoreString(s: string, indices: number[]): string {
  const ret = new Array(s.length)
  for (let i = 0; i < indices.length; i++) {
    ret[indices[i]] = s.charAt(i)
  }
  return ret.join('')
}
