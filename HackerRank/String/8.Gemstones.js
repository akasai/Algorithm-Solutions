function gemstones (arr) {
  const target = new Set(arr[0])
  for (let i = 0; i < arr.length; i++) {
    for (const t of target) {
      if (!arr[i].includes(t)) target.delete(t)
    }
  }

  return target.size
}
