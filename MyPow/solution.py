class Solution(object):
  def myPow(self, x, n):
    if n == 0:
      return 1
    if n == 1:
      return x
    if n == -1:
      return 1/x

    def recurse(m):
      if m == 0:
        return 1
      if m == 1:
        return x

      half = math.floor(m/2)
      prod = recurse(half)

      return prod * prod * (1 if m%2 == 0 else x)

    power = abs(n)
    val = recurse(power)

    if n > 1:
      return val
    if n < 0:
      return 1/val

# needs optimization

    """
    :type x: float
    :type n: int
    :rtype: float
    """
    