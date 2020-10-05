function smallerNumbersThanCurrent(nums: number[]): number[] {
  const sorted = [...nums].sort((a, b) => a - b)
  return nums.map((v) => sorted.indexOf(v))
}
