function solution(array) {
    var answer = [];
    let max = 0;
    for(let num of array){
        if(num > max){
            max = num;
        }
    }
    answer.push(max);
    answer.push(array.indexOf(max));
    return answer;
}