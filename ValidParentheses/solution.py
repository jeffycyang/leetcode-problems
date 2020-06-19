class Solution(object):
  def isValid(self, s):
    if len(s) == 0:
      return True
    if len(s) % 2 == 1:
      return False
    if s[0] == ')' \
      or s[0] == ']' \
      or s[0] == '}' \
      or s[-1] == '(' \
      or s[-1] == '[' \
      or s[-1] == '{':
      return False

    arr = [x.encode('utf8') for x in list(s)]
    buff = []
    dic = { ')': '(', ']': '[', '}': '{' }

    while len(arr) > 0:
      if arr[-1] == ')' or arr[-1] == ']' or arr[-1] == '}':
        buff.append(arr.pop())
      else:
        if arr[-1] != dic[buff[-1]]:
          return False

        buff.pop()
        arr.pop()

    return True

    """
    :type s: str
    :rtype: bool
    """
    