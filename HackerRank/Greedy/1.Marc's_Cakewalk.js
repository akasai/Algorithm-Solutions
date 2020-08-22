// TODO: Using Greedy
function marcsCakewalk (calorie) {
  calorie = calorie.sort((a, b) => b - a)

  let sum = 0
  for (let i = 0; i < calorie.length; i++) {
    sum += calorie[i] * Math.pow(2, i)
  }
  return sum
}
