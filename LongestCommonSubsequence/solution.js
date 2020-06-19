const LCS =  = (s1, s2) => {
  const subseq = []

  const recurse = (x, y, curr) => {
    if (x.length === 0 || y.length === 0) return subseq.push(curr)

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        if (x[i] === y[j]) recurse(x.slice(i + 1), y.slice(j + 1), curr.concat(x[i]))
      }
    }
      
    subseq.push(curr)
  }

  recurse(s1, s2, '')

  return subseq.reduce((acc, curr) => curr.length > acc ? curr.length : acc, 0)
}

LCS("AGGTAB", "GTAB")

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = (s1, s2) => {
  const subseq = []

  const recurse = (x, y, curr) => {
    if (x.length === 0 || y.length === 0) return subseq.push(curr)

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        if (x[i] === y[j]) recurse(x.slice(i + 1), y.slice(j + 1), curr.concat(x[i]))
      }
    }
      
    subseq.push(curr)
  }

  recurse(s1, s2, '')

  return subseq.reduce((acc, curr) => curr.length > acc ? curr.length : acc, 0)
}

longestCommonSubsequence("pcbmdupybalwpkbidypqbwhefijytypwdwbsharqdurkrslqlqla", "jodcpirubsryvudgpwncrmtypatunqpkhehuhkdmbctyxghsfktaz")

