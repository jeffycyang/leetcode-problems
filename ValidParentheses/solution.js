const isValid = function(s) {
  if (s.length === 0) return true
  if (s.length % 2 !== 0) return false

  const first = s[0]
  const last = s[s.length - 1]
  if (first === ')'
    || first === ']'
    || first === '}'
    || last === '('
    || last === '['
    || last === '{'
  ) return false

  const arr = s.split('')
  const buffer = []
  const dict = { ')': '(', ']': '[', '}': '{' }

  while (arr.length > 0) {
    if (arr[arr.length - 1] === ')'
      || arr[arr.length - 1] === ']'
      || arr[arr.length - 1] === '}'
    ) {
      buffer.push(arr.pop())
    } else {
      if (arr[arr.length - 1] !== dict[buffer[buffer.length - 1]]) return false
      arr.pop()
      buffer.pop()
    }
  }

  return true
}
