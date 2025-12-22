function solution(clothes) {
    let answer = 1;
    const set = new Set();
    let hash = new Map();
    for (const item of clothes) {
        set.add(item[1]);
    }
    let arraySet = [...set]
    for(const item of clothes){
        hash.set(item[1], (hash.get(item[1]) ? hash.get(item[1])+1:1));
    }
    for(const clothe of arraySet){
        answer *= hash.get(clothe)+1
    }
    return answer -1
    // head가 2개 eye가 1개 일단 각각 한개씩은 무조건 있으니 제외하고 head가 2개면 head에 eye 추가한거 2개
    // head가 3개 eye가 3개 face가 1개 
}