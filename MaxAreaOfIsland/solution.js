// NOT DONE

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = grid => {
  let max = 0
  const gridH = grid.length
  const gridW = grid[0].length

  const recurse = (currPos, currArea, island) => {
    const currH = currPos[0]
    const currW = currPos[1]

    max = currArea > max ? currArea : max

    if (grid[currH][currW] === 0) return 0

    if (grid[currH][currW] === 1) {
      let newIsland = island.slice()
      newIsland.push(`${currH} ${currW}`)

      let newArea = currArea

      if (currH + 1 < gridH && !island.includes(`${currH + 1} ${currW}`)) {
        const a = recurse([currH + 1, currW], currArea + 1, newIsland)
        newArea += a
      }
      if (currH - 1 >= 0 && !island.includes(`${currH - 1} ${currW}`)) {
        const a = recurse([currH - 1, currW], currArea + 1, newIsland)
        newArea += a
      }
      if (currW + 1 < gridW && !island.includes(`${currH} ${currW + 1}`)) {
        const a = recurse([currH, currW + 1], currArea + 1, newIsland)
        newArea += a
      }
      if (currW - 1 >= 0 && !island.includes(`${currH} ${currW - 1}`)) {
        const a = recurse([currH, currW - 1], currArea + 1, newIsland)
        newArea += a
      }

      newArea++

      max = newArea > max ? newArea : max
    }
  }
  
  for (let i = 0; i < gridH; i++) {
    for (let j = 0; j < gridW; j++) {
      recurse([i, j], 0, [])
    }
  }

  return max
}



// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const maxAreaOfIsland = grid => {
//   let max = 0
//   const gridH = grid.length
//   const gridW = grid[0].length

//   const recurse = (currPos, currArea, island) => {
//     const currH = currPos[0]
//     const currW = currPos[1]

//     if (grid[currH][currW] === 0) return

//     if (grid[currH][currW] === 1) {
//       currArea++
//       max = currArea > max ? currArea : max

//       let newIsland = island.slice()
//       newIsland.push(`${currH} ${currW}`)

//       if (currH + 1 < gridH && !island.includes(`${currH + 1} ${currW}`)) recurse([currH + 1, currW], currArea, newIsland)
//       if (currH - 1 >= 0 && !island.includes(`${currH - 1} ${currW}`)) recurse([currH - 1, currW], currArea, newIsland)
//       if (currW + 1 < gridW && !island.includes(`${currH} ${currW + 1}`)) recurse([currH, currW + 1], currArea, newIsland)
//       if (currW - 1 >= 0 && !island.includes(`${currH} ${currW - 1}`)) recurse([currH, currW - 1], currArea, newIsland)
//     }
//   }
  
//   for (let i = 0; i < gridH; i++) {
//     for (let j = 0; j < gridW; j++) {
//       recurse([i, j], 0, [])
//     }
//   }

//   return max
// }