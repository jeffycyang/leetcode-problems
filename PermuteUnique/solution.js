/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
  const perms = []
  const check = {}

  const recurse = (curr, elems) => {
    if (curr.length === nums.length) {
      const stringCurr = curr.toString()
      if (check[stringCurr] === undefined) {
        perms.push(curr)
        check[stringCurr] = true
      }
      return
    }

    for (let i = 0; i < elems.length; i++) {
      recurse(curr.concat([elems[i]]), elems.slice(0, i).concat(elems.slice(i + 1)))
    }
  }

  recurse([], nums)

  return perms
}
