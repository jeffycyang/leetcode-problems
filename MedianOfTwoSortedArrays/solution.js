/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = function(nums1, nums2) {
  const total = nums1.length + nums2.length
  const upperMidIndex = Math.ceil(total/2)
  const isEven = total % 2 === 0

  let median
  let arr = []
  let ind1 = 0
  let ind2 = 0
  let ind // for edge case

  if (nums1.length === 0 || nums2.length === 0) {
    arr = nums1.length !== 0 ? nums1 : nums2
    median = isEven
      ? arr.length !== 1
        ? (arr[upperMidIndex-1] + arr[upperMidIndex])/2 : arr[upperMidIndex-1]
      : arr[upperMidIndex-1]
    return median
  }

  for (let i = 0; i <= Math.ceil(total/2); i++) {
    if (nums1[ind1] !== undefined && nums2[ind2] !== undefined) {
      arr.push(nums1[ind1] > nums2[ind2] ? nums2[ind2] : nums1[ind1])

      if (nums1[ind1] > nums2[ind2]) {
        ind2++
      } else {
        ind1++
      }
    } else {
      ind = ind !== undefined
        ? ind
        : nums1[ind1] !== undefined ? ind1 : ind2
      const nums = nums1[ind1] !== undefined ? nums1 : nums2
      arr.push(nums[ind])
      ind++
    }

    if (i >= total / 2) {
      median = isEven
        ? ((arr[i-1] !== undefined ? arr[i-1] : 0) + arr[i])/2
        : arr[i-1]
      return median
    }
  }

  return median
}

// good (low)memory usage, time ok

// var x = []
// var y = [1]

// var x = [1]
// var y = [2, 3, 4]

// var x = [1, 3, 4, 7]
// var y = [2, 3, 5, 6]

// var x = [1, 2]
// var y = [3, 4]
