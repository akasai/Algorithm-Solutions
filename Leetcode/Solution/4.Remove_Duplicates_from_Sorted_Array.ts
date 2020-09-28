function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) return 1

  let j = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) nums[++j] = nums[i]
  }
  return j + 1
}
