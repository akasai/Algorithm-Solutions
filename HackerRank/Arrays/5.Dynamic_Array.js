function dynamicArray (n, queries) {
  const answer = []
  const seqList = []
  for (let i = 0; i < n; i++) {
    seqList.push([])
  }

  let lastAnswer = 0
  for (let i = 0; i < queries.length; i++) {
    const [type, x, y] = queries[i]
    const seq = (x ^ lastAnswer) % n

    if (type === 1) {
      seqList[seq].push(y)
    } else if (type === 2) {
      lastAnswer = seqList[seq][y % seqList[seq].length]
      answer.push(lastAnswer)
    }
  }
  return answer
}
