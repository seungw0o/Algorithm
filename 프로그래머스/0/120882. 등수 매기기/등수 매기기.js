function solution(score) {
    // 평균 점수 계산
    var averages = score.map(i => i.reduce((r, num) => r + num, 0) / i.length);
    
    // 등수 매기기
    var ranks = [];
    var indexedScores = averages.map((avg, index) => ({ score: avg, index }));
    
    // 점수를 기준으로 내림차순 정렬
    indexedScores.sort((a, b) => b.score - a.score);
    
    let currentRank = 1;
    
    for (let i = 0; i < indexedScores.length; i++) {
        // 이전 점수와 비교하여 같은 점수일 경우 등수 유지
        if (i > 0 && indexedScores[i].score === indexedScores[i - 1].score) {
            ranks[indexedScores[i].index] = ranks[indexedScores[i - 1].index];
        } else {
            ranks[indexedScores[i].index] = currentRank;
        }
        currentRank++;
    }

    return ranks;
}
