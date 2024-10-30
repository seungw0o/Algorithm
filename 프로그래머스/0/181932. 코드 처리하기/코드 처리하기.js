// 모드가 0이면 인덱스가 짝수일때만, ret에 추가
// 모드가 1이면 인덱스가 홀수일때만, ret에 추가
// 모드의 기본값은 0이다.
// return할 때, ret에 아무것도 없다면 "EMPTY"를 return
// false = 0, true = 1로 두자

function solution(code) {
    let answer = [];
    let mode = false
    const codeArr = code.split("");
    for (let i = 0; i < codeArr.length; i++){
        if(codeArr[i] === "1"){
            mode = !mode;
        }
        if(mode === false){
            if(i % 2 === 0 && codeArr[i] != "1"){
                answer.push(codeArr[i]);
            }
        }
        else{
            if(i % 2 !== 0 && codeArr[i] != "1" ){
                answer.push(codeArr[i]);
            }
        }
    }
    
    return answer.length !== 0 ? answer.join("") : "EMPTY"
    
}