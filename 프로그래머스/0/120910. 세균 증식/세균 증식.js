function solution(n, t) {
    let answer = 0;
    for(let i = 0; i < t; i++){
        n *= 2;
    }
    answer = n;
    return answer;
}