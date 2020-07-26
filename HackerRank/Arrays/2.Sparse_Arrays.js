function matchingStrings (strings, queries) {
  const cnt = new Array(queries.length).fill(0)
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (strings[j] === queries[i]) cnt[i]++
    }
  }
  return cnt
}
