function solution(sides) {
    const maxNum = Math.max(...sides);
    sides.splice(sides.indexOf(maxNum),1)
    return maxNum < sides.reduce((acc,cur)=>acc+cur,0) ? 1 : 2
    
}