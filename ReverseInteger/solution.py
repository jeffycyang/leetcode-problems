class Solution(object):
  def reverse(self, x):
    if x == 0 or x > 2**31 - 1 or x < 2**31 * -1:
      return '0'

    isNeg = True if x < 0 else False
    xStr = str(x)
    xStr = list(xStr)

    if isNeg == True:
      xStr.pop(0)

    xStr.reverse()

    while xStr[0] == '0':
      xStr.pop(0)

    xStr = int(''.join(xStr))
    if isNeg == True:
      xStr = -1 * xStr

    if xStr > 2**31 - 1 or xStr < 2**31 * -1:
      return '0'

    return xStr

    """
    :type x: int
    :rtype: int
    """
