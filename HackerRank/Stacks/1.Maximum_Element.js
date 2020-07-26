function processData (input) {
  const q = input.split('\n')
  const len = +q[0]
  const stack = []
  for (let i = 1; i <= len; i++) {
    const [cmd, value] = q[i].split(' ')

    if (+cmd === 1) stack.push(+value)
    else if (+cmd === 2) stack.pop()
    else if (+cmd === 3) console.log(Math.max(...stack))
  }
}
