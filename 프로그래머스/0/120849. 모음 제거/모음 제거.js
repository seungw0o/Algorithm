function solution(my_string) {
    const gather = ['a', 'e', 'i', 'o', 'u'];
    let answer = my_string;

    for (let vowel of gather) {
        answer = answer.split('').filter(char => char !== vowel).join('');
    }
    
    return answer;
}
