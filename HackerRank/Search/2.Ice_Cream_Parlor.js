// TODO: refactoring HASH TABLE
function icecreamParlor (m, arr) {
  for (let i = 0; i < arr.length; i++) {
    const remain = m - arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (remain === arr[j]) return [i + 1, j + 1]
    }
  }
}
