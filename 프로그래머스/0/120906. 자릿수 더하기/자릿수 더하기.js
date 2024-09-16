function solution(n) {
    num = String(n);
    let answer = 0;
    for(let i = 0; i < num.length; i++){
        answer += parseInt(num[i]);
    }
    return answer;
}