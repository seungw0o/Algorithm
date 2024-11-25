function solution(order) {
    var answer = 0;
    order.forEach(i => {
        if(i.indexOf("americano") !== -1){
            answer += 4500;
        }else if(i.indexOf("cafelatte") !== -1){
            answer += 5000;
        }
        else {
            answer+=4500;
        }
    })
    return answer;
}