/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  let quo = 0
  let div = dividend

  while (div > divisor) {
    div -= divisor
    quo++
  }

  const recurse = d => {
    if (d > dividend) return 0

    return 
    // quo + dividend?
  }

  return quo
}
