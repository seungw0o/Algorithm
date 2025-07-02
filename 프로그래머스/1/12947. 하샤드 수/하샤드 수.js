function solution(x) {
    let number = 0;
    String(x).split("").map(Number).forEach((value)=>{
        number += value;
    })
    if(x % number === 0){
        return true
    }else{
        return false
    }
}