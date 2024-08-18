function solution(hp) {
    var answer = 0;
    const warlord = 5;
    const soldier = 3;
    const work = 1;
    while(hp !== 0){
        if(hp >= warlord){
            hp -= warlord;
            answer += 1;
        }
        else if(hp >= soldier){
            hp -= soldier;
            answer += 1;
        }
        else{
            hp -= work;
            answer += 1;
        }
    }
    return answer;
}