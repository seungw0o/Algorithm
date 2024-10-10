function solution(order) {
    var answer = 0;
    const str = order.toString()
    let arr = [...str];
    let cnt = 0;
    for(let i of arr){
        if(i === "3"){
            cnt += 1;
        }
        else if(i === "6"){
            cnt += 1;
        }
        else if(i === "9"){
            cnt += 1;
        }
    }
    answer = cnt;
    return answer;
}