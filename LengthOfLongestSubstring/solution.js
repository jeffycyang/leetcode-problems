/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function(s) {
  let len = 0
  let substr = []
  let dict = {}

  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]]) {
      while (substr[0] !== s[i]) {
        delete dict[substr[0]]
        substr.shift()
      }
      substr.shift()
    } else {
      dict[s[i]] = true
    }
    substr.push(s[i])

    const currLen = substr.length

    if (currLen > len) len = currLen
  }

  return len
}

// can be faster

// stackoverflow version with map
// const lengthOfLongestSubstring = (n) => {
//     const nums = n.split('')
//     const subseq = new Map()
//     let max = 0

//     for (let i = 0; i < nums.length; i++) {
//         if (!subseq.has(nums[i])) {
//             subseq.set(nums[i], i)
//         } else {
//             i = subseq.get(nums[i])
//             subseq.clear()
//         }

//         max = subseq.size > max ? subseq.size : max
//     }
    
//     return max
// }

// lengthOfLongestSubstring('1123223')
