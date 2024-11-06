function solution(numbers) {
    var answer = 0;
    const sortArr = numbers.sort((a, b) => a - b)
    return sortArr[numbers.length - 1] * sortArr[numbers.length - 2]
    
}