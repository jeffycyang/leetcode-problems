/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  if (n === -1) return 1 / x

  if (Math.abs(n) > 1) { // this conditional probably not needed

    const recurse = m => {
      if (m === 0) return 1
      if (m === 1) return x

      const hf = Math.floor(m/2)
      const prod = recurse(hf)

      return prod * prod * (m%2 === 0 ? 1 : x)
    }

    const pow = Math.abs(n)
    const val = recurse(pow)

    if (n > 1) return val
    if (n < 0) return 1 / val
  }
}
