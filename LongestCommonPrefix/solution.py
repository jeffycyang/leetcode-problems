class Solution(object):
  def longestCommonPrefix(self, strs):
    if len(strs) == 0:
      return ''

    lcp = ''
    shortest = len(min(strs, key=len))

    for x in range(shortest):
      letr = reduce((lambda a, b: b[x] if x < len(b) and a == b[x] else ''), strs, strs[0][x])

      if letr == '':
        return lcp

      lcp += letr

    return lcp

# time good, memory not so much