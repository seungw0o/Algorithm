function solution(num, k) {
    let answer = 0;
    const str = num.toString();
    let arr = [...str];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === k.toString()){
            answer = i + 1;
            break;
        }
        else{
            answer = -1;
        }
    }
    return answer;
}