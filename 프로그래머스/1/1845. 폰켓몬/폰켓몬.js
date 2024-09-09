function solution(nums) {
    let answer = 0;
    const hash = new Map();
    for (let phoneket of nums){
        hash.set(phoneket, 1);
    }
    if (hash.size >= parseInt(nums.length/2)){
        answer = parseInt((nums.length)/2);
    }
    else{
        answer = hash.size;
    }
    
    return answer;
    
    
}