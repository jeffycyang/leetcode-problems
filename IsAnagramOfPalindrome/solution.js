// from Hired
const isAnagramOfPalindrome = s => {
  if (s.length === 1) return true

  const isEven = s.length % 2 === 0
  const dict = {}

  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === undefined) {
      dict[s[i]] = 1
    } else {
      dict[s[i]]++
    }
  }

  if (isEven) {
    return Object.keys(dict).reduce((acc, curr) => {
      return acc ? dict[curr] % 2 === 0 : acc
    }, true)        
  } else {
    return Object.keys(dict).reduce((acc, curr) => {
      return dict[curr] % 2 === 1 ? acc + 1 : acc
    }, 0) === 1
  }
}

// isAnagramOfPalindrome('carrace')
isAnagramOfPalindrome('lllllld')
