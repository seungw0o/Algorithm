function solution(my_string, n) {
    var answer = '';
    let arr = [...my_string];
    let arr2 = [];
    for(let i of arr){
        arr2.push(i.repeat(n));
    }
    answer = arr2.join('');
    
    return answer;
}