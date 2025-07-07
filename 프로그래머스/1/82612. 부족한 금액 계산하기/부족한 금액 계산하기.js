function solution(price, money, count) {
    var answer = -1;
    let total = 0;
    for(let i = 1; i <= count; i++){
        total += price * i;
    }
    return (money-total) < 0 ? Math.abs(money-total) : 0
}