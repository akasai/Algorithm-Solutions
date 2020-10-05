function shuffle(nums: number[], n: number): number[] {
  const ret = []
  for (let i = 0; i < nums.length / 2; i++) {
    ret.push(nums[i], nums[i + n])
  }
  return ret
}
