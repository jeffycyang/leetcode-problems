/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// const permute = function(nums) {
//   const perms = []

//   const recurse = (curr, elems) => {
//     if (elems.length === 0) {
//       perms.push(curr)
//       return
//     }

//     for (let i = 0; i < elems.length; i++) {
//       recurse(curr.slice().concat([elems[i]]), elems.slice(0, i).concat(elems.slice(i+1)))
//     }
//   }

//   recurse([], nums)

//   return perms
// }

const permute = function(nums) {
  const perms = []
  const length = nums.length

  const recurse = (curr, elems) => {
    if (curr.length === nums.length) {
      perms.push(curr)
      return
    }

    for (let i = 0; i < elems.length; i++) {
      recurse(curr.concat(elems[i]), elems.slice(0, i).concat(elems.slice( i + 1)))
    }
  }

  recurse([], nums)

  return perms
}
