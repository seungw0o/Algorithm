function solution(n)
{
    var answer = 0;

    return String(n).split('').map(Number).reduce((acc, cur) => acc + cur, 0);
}