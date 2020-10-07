function decompressRLElist(nums: number[]): number[] {
  const ret = []
  for (let i = 0; i < nums.length; i+=2) {
    ret.push(...new Array(nums[i]).fill(nums[i+1]))
  }
  return ret
};
