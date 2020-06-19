class Solution(object):
  def lengthOfLongestSubstring(self, s):
    length = 0
    substr = ''

    for letr in s:
      if substr.find(letr) != -1:
        substr = substr[substr.find(letr) + 1:]
      substr = substr + letr

      if len(substr) > length:
        length = len(substr)

    return length
