function solution(participant, completion) {
    var answer = '';
    let hash = new Map();

    
    for (let person of participant) {
        hash.set(person, (hash.get(person) || 0) + 1);
    }

    
    for (let person of completion) {
        hash.set(person, hash.get(person) - 1);
        if (hash.get(person) === 0) {
            hash.delete(person);
        }
    }

    
    for (let key of hash.keys()) {
        answer = key; 
    }

    return answer;
}
