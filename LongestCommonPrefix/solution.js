/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
    
  let lcp = ''
  const shortest = strs.reduce((acc, curr) =>
    curr.length <= acc ? curr.length : acc
  , Infinity)

  for (let i = 0; i < shortest; i++) {
    const letr = strs.reduce((acc, curr) =>
      curr[i] !== undefined && acc === curr[i] ? curr[i] : ''
    , strs[0][i])

    if (letr === '') return lcp
      
    lcp += letr
  }

  return lcp
}
