/*
TC-7

3
5
1 1 4 1 1
4
2 0 0 0
4
0 0 2 0
*/
function balancedSums (arr) {
  let l = 0
  let r = arr.length - 1

  // if (!r) return 'YES'

  let l_s = 0
  let r_s = 0

  while (r - l >= 1) {
    if (l_s >= r_s) {
      r_s += arr[r]
      r--
    } else if (l_s < r_s) {
      l_s += arr[l]
      l++
    }
  }
  return l_s === r_s ? 'YES' : 'NO'
}
