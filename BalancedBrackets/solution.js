const dict = {
  '(': ')',
  '[': ']',
  '{': '}'
}

// Complete the isBalanced function below.
function isBalanced(s) {
  if (s.length % 2 === 1) return 'NO'

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === '('
      || s[i] === '['
      || s[i] === '{'
    ) {
      stack.push(s[i])
    } else {
      if (s[i] !== dict[stack.pop()]) return 'NO'
    }
  }

  return 'YES'
}
