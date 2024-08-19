function solution(money) {
    let answer = [];
    let cnt = 0;
    while(money >= 5500){
        money -= 5500;
        cnt += 1;
    }
    answer.push(cnt);
    answer.push(money);
    return answer;
}