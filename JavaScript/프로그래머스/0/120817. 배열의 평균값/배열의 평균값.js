function solution(numbers) {
    var answer = 0;
    const sum = numbers.reduce((a, b) => a+b, 0);
    answer = sum/numbers.length;
    return answer;
}