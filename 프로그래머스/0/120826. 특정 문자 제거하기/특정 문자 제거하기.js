function solution(my_string, letter) {
    var answer = '';
    myStrArr = [...my_string];
    for (let i = 0; i < myStrArr.length; i++){
        if(myStrArr[i] == letter){
            myStrArr.splice(i, 1);
            i--;
        }
    }
    answer = myStrArr.join("");
    return answer;
}