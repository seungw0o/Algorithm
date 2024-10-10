function solution(emergency) {
    var answer = [];

    // 각 원소와 나머지 원소들을 비교 했을떄, 비교당한 원소보다 큰 수 + 1을 하면 그 원소의 순서가 나옴
    // 그걸 어떻게 구현할까?
    // 먼저 각 원소와 나머지 원소들을 비교 해보자
    answer = emergency.map(node => {
        let cnt = 0;
        for(let i of emergency){
            if(node < i){
                cnt += 1;
            }
        }
        return node = cnt + 1;
    })
    
    
    
    return answer;
}