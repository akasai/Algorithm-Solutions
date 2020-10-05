function sumOddLengthSubarrays(arr: number[]): number {
  const ret: number[] = []
  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j + i <= arr.length; j++) {
      ret.push(...arr.slice(j, j + i))
    }
  }
  return ret.reduce((sum, v) => sum + v, 0)
}
