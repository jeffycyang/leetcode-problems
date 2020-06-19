/*
pot flower thing
*/


const solution = (pot) => {
    // Type your solution here 
    const height = pot.length
    const width = pot[0].length
    
    if (height === 1 && width === 1 && pot[0][0] === 1) return false
    
    const gaps = []
    for (let i = 0; i < height; i++) {
        gaps[i] = []
        for (let j = 0; j < width; j++) {
            if (pot[i][j] === 0) {
                gaps[i].push(j)
            }
        }
    }
    
    return gaps.reduce((acc, curr, ind, arr) => {
        if (ind === 0) return true
        
        return acc ? curr.some(item => arr[ind-1].includes(item)) : false
    }, true)
};
