/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  if (x === 0 || x > Math.pow(2, 31) - 1 || x < -1 * Math.pow(2,31)) return '0'

  const isNeg =  x < 0 ? true : false
  let str = x.toString()
  str = str.split('')
  if (isNeg) str.shift()

  str = str.reverse()
  while (str[0] === '0') str.shift()

  str = str.join('') * (isNeg ? -1 : 1)

  if (str > Math.pow(2, 31) - 1 || str < -1 * Math.pow(2,31)) return '0'

  return str
}
