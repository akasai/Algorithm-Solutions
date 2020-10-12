function destCity(paths: string[][]): string {
  let ans = ''
  const set = new Set()
  for (const path of paths) {
    set.add(path[0])
  }
  for (const path of paths) {
    if (!set.has(path[1])) ans = path[1]
  }

  return ans
}
