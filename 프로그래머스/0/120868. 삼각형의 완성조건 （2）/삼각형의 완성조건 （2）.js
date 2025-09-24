function solution(sides) {
    let a = Math.max(...sides);
    let b = Math.min(...sides);
    let answer = 0;
    for(let i = (a-b)+1; i <= a; i++){ //a가 가장 큰 값일떄 c의 경우의 수 구하기
        answer++;
    }
    for(let j = a+1; j < a+b; j++){ //c가 가장 큰 값일때 c의 경우의 수 구하기
        answer++;
    }
    return answer;
}


// 배열에는 두가지 원소가 주어짐 [a,b] 여기서 a는 b보다 크다고 가정을 하고 문제를 푼다 (a>b)
// a와b가 아닌 다른 한가지 원소를 c라고 가정함.
// a = Math.max(...sides), b = Math.min(...sides)
// 여기서 문제를 풀때 생각해야 하는건 1. [a,b,c]에서 a가 가장 큰 경우. 2. [a,b,c]에서 c가 가장 큰 경우
// 1번 경우일 떄 a는 b+c보다 작아야함(a<b+c && a>=c)
// 2번 경우일 떄 c는 b+a보다 작아야함(c<b+a && c>a)
// 문제가 원하는 답은 [a,b]가 주어질때 나머지 한 변이 될 수 있는 정수의 개수임 즉 c가 될 수 있는 숫자의 개수