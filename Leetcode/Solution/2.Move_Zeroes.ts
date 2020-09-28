function moveZeroes(nums: number[]): void {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i--, 1)
      nums.push(0)
      len--
    }
  }
}
