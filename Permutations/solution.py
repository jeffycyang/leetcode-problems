class Solution(object):
  def permute(self, nums):
    perms = []

    def recurse(curr, elems):
      if len(elems) == 0:
        perms.append(curr)
        return

      for i in range(len(elems)):
        # recurse(curr[:].append(elems[i]), elems[0:i] + elems[i+1:])
        # recurse(curr[:] + [elems[i]], elems[0:i] + elems[i+1:])
        recurse(curr + [elems[i]], elems[0:i] + elems[i+1:])

    recurse([], nums)

    return perms

    """
    :type nums: List[int]
    :rtype: List[List[int]]
    """
