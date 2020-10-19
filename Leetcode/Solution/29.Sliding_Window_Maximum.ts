function maxSlidingWindow(nums: number[], k: number): number[] {
  const answer = []
  const q = []

  for (let i = 0; i < nums.length; i++) {
    while (q.length >= 1 && nums[i] > q[q.length - 1]) q.pop()
    q.push(nums[i])

    const left = (i - k) + 1
    if (left >= 0) {
      answer.push(q[0])
      if (nums[left] === q[0]) q.shift()
    }
  }

  return answer
}
