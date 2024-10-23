function solution(chicken) {
    let cupons = chicken;
    let totalService = 0;
    let service = 0
    
    while(cupons >= 10){
        service = Math.floor(cupons / 10);
        totalService += service;
        cupons = cupons % 10 + service;
    }
    
    
    
    return totalService;
}