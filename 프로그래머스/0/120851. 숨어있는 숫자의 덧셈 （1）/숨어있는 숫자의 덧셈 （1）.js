function solution(my_string) {
    const filter = my_string.split("").filter(value => !isNaN(value)).map(Number)
    return filter.reduce((acc,cur)=>acc+cur,0);
}