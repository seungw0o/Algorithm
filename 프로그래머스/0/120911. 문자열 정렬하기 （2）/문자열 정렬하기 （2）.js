function solution(my_string) {
    return my_string.split('').map(i => i.toLowerCase()).sort().join('')
}