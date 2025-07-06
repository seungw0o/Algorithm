function solution(s) {
    return [...s].filter(char => s.indexOf(char) === s.lastIndexOf(char)).sort().join("");

}