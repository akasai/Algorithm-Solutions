function subtractProductAndSum(n: number): number {
  let p = 1
  let s = 0

  while (n > 0) {
    const digit = n % 10
    p *= digit
    s += digit

    n = Math.floor(n / 10)
  }

  return p - s
}
