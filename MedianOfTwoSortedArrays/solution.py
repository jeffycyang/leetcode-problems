class Solution(object):
  def findMedianSortedArrays(self, nums1, nums2):
    total = len(nums1) + len(nums2)
    upperMidIndex = 
    isEven = 

    if len(nums1) == 0 or len(nums2) == 0:
      arr = nums1 if len(nums1) != 0 else nums2
      return arr[upperMidIndex-1] if isEven == False else arr[upperMidIndex-1] if len(arr) == 1 else (arr[upperMidIndex-1] + arr[upperMidIndex])/2

    # for i 

    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: float
    """
    