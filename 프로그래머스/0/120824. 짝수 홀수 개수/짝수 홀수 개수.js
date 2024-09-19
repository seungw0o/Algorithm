function solution(num_list) {
    let answer = [];
    let odd = 0;
    let even = 0;
    for (let num of num_list){
        if(num % 2 === 0){
            even += 1;
        }else{
            odd += 1;
        }
    }
    answer = [even, odd]
    return answer;
}