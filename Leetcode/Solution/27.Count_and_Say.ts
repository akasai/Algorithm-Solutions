// loop
function countAndSay(n: number): string {
  const arr = new Array(n).fill('1')
  for (let i = 1; i < n; i++) {
    const num = arr[i - 1].toString()

    let str = ''
    for (let i = 0, count = 1; i <= num.length - 1; i++) {
      if (num[i] !== num[i + 1]) {
        str += `${count}${num[i]}`
        count = 1
      } else {
        count++
      }
    }
    arr[i] = str
  }
  return arr[n - 1]
}

// recursion
function countAndSay2(n: number): string {
  if (n === 1) return '1'

  const num = countAndSay2(n - 1)
  let str = ''
  for (let i = 0, count = 1; i < num.length; i++) {
    if (num[i] !== num[i + 1]) {
      str += `${count}${num[i]}`
      count = 1
    } else {
      count++
    }
  }

  return str
}
