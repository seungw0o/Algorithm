function solution(my_str, n) {
    let answer = [];
    const my_str_len = my_str.length;
    for (let i = 0; i < my_str_len; i++) {
        answer.push(my_str.substr(i, n));
        i += n-1;
    }
    
    return answer;
}