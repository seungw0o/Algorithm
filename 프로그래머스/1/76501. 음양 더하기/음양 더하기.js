function solution(absolutes, signs) {
    return absolutes.map((value, index) => (signs[index] ? value : -value)).reduce((acc,cur)=> acc+cur,0)
}