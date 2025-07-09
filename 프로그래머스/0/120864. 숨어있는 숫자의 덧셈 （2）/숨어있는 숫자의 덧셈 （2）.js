function solution(my_string) {
    if(my_string.match(/\d+/g) === null){
        return 0
    }
    return my_string.match(/\d+/g).map(Number).reduce((acc,cur)=>acc+cur,0) 
}