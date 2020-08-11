function solution (progresses, speeds) {
  var answer = []
  const remains = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]))

  let key = remains[0]
  answer.push(1)
  for (let i = 1; i < remains.length; i++) {
    if (key >= remains[i]) {
      answer[answer.length - 1]++
    } else {
      key = remains[i]
      answer.push(1)
    }
  }

  return answer
}
