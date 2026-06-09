function solution(d, budget) {
     d.sort((a, b) => a - b);
     let answer = 0;
     for (const amount of d) {
         if (budget < amount) break;
         budget -= amount; 
         answer++;        
     }
    return answer;
}