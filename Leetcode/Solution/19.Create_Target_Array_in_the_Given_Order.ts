function createTargetArray(nums: number[], index: number[]): number[] {
  const target = []

  for (let i = 0; i < index.length; i++) {
    if (target[index[i]] > -1) {
      target.splice(index[i], 0, nums[i])
    } else {
      target[index[i]] = nums[i]
    }
  }

  return target
}
