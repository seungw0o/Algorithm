function solution(my_string) {
    var answer = '';
    let arrMyStr = my_string.split("");
    let reverseMyStr = arrMyStr.reverse();
    answer = reverseMyStr.join("");
    return answer;
}