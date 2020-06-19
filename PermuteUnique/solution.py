class Solution(object):
  def permuteUnique(self, nums):
    perms = []
    check = {}

    def recurse(curr, elems):
      if len(curr) == len(nums):
        currString = ','.join(str(e) for e in curr)
        if check.get(currString) == None:
          perms.append(curr)
          check[currString] = True
        return

      for i in range(len(elems)):
        recurse(curr + [elems[i]], elems[0:i] + elems[i+1:])

    recurse([], nums)

    return perms

    """
    :type nums: List[int]
    :rtype: List[List[int]]
    """
    