function solution(my_string) {
    var answer = [];
    return my_string.split('').filter(i => !isNaN(parseInt(i))).map(i => parseInt(i)).sort((a, b) => a - b);
    
}