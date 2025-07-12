function solution(A,B){
    const a = A.sort((a, b) => a - b)
    const b = B.sort((a, b) => a - b).reverse()
    let answer = 0;
    for(let i = 0; i<A.length; i++){
        const temp = (a[i]*b[i])
        answer += temp
    }

    return answer;
}