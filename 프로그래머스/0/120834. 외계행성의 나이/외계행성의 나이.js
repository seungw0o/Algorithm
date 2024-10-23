function solution(age) {
    var answer = '';
    let old = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let ageList = [...age.toString()];
    for (i of ageList){
        answer += old[parseInt(i)];
    }
    return answer;
}