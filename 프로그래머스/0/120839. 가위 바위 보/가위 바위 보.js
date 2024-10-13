function solution(rsp) {
    let answer = '';
    const arr = [...rsp];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == '2'){
            arr[i] = 0;
        }
        else if(arr[i] == '0'){
            arr[i] = 5;
        }
        else if(arr[i] == '5'){
            arr[i] = 2;
        }
    }
    answer = arr.join("");
    return answer;
}