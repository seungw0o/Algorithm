function solution(n, k) {
    let answer = 0;
    if(n >= 10){
        answer += n*12000;
        answer += (k - parseInt(n/10))*2000;
    }
    else{
        answer += (n*12000);
        answer += (k*2000);
    }
    return answer;
}