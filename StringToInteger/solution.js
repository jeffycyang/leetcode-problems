/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
  strToConv = str.trim().split(' ')[0]

  if (strToConv === '') return str
    
  if (strToConv[0] === '-' || !isNaN(Number(strToConv[0])) ) {
    
  }
    
  return 0
}