function solution(left, right) {
    let answer = 0;
    for(left; left <= right; left++){
        let count = 0;
        for (let i = 1; i <= left; i++){
            if(left % i === 0){
                count += 1;
            }
        }
        if(count % 2 === 0){
            answer += left;
        }else{
            answer -= left;
        }
    }
    return answer;
}