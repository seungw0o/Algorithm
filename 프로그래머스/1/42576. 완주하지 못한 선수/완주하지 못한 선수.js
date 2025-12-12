function solution(participant, completion) {
    let hash = new Map()
    for(let name of participant){
        hash.set(name, (hash.get(name) || 0)+1)
    }
    for(let name of completion){
        hash.set(name, hash.get(name) - 1)
    }
    
    for(let [name, count] of hash){
        if(count > 0) return name
    }
}
