check = {
  '(': ')',
  '[': ']',
  '{': '}'
}

def isBalanced(s):
  if len(s) % 2 == 1:
    return 'NO'

  stack = []

  for c in s:
    if c == '(' or c == '[' or c == '{':
      stack.append(c)
    elif c != check[stack.pop()]:
      return 'NO'

  return 'YES'
