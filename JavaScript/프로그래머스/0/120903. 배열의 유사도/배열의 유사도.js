function solution(s1, s2) {
    var answer = 0;
    for(let i of s1){
        let arr = s2.filter(char => char === i);
        answer += arr.length
    }
    
    return answer;
}