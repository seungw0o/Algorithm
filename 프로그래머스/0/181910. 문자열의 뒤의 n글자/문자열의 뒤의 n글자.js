function solution(my_string, n) {
    
    return my_string.split('').slice(-n,my_string.length).join('');
}