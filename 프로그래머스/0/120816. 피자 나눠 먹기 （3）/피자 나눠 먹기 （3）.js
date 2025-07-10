function solution(slice, n) {
    if(n%slice === 0){
        return Math.floor(n/slice)
    }else{
        return Math.floor(n/slice)+1
    }
}