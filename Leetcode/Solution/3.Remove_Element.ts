function removeElement(nums: number[], val: number): number {
  const idx = nums.indexOf(val)

  if (idx === -1) return nums.length

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i--, 1)
    }
  }

  return nums.length
}
