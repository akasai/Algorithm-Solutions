function majorityElement(nums: number[]): number {
  const pivot = Math.floor(nums.length / 2)

  const countMap = nums.reduce((obj: any, v: number) => {
    if (obj[v]) obj[v]++
    else obj[v] = 1
    return obj
  }, {})

  let answer = 0
  for (const key in countMap) {
    if (countMap[key] > pivot) {
      answer = +key
      break
    }
  }
  return answer
}
