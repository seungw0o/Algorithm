function solution(num) {
    let cnt = 0;
    while (num !== 1){
        
        if(num % 2 === 0){
            num /= 2;
            cnt += 1;
        }
        else if(num % 2 === 1){
            num *= 3;
            num += 1;
            cnt += 1;
        }
    }
    return cnt >= 500 ? -1 : cnt;
}