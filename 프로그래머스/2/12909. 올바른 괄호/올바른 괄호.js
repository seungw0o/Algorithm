function solution(s) {
    const stack = [];
    for(let i of s){
        if(i === "("){
            stack.push(i);
        }
        else if(i === ")"){
            if (stack.length === 0) {
                return false; 
            }
            stack.pop();
        }
        
    }
    if(stack.length > 0){
        return false;
    }
    return stack.length === 0 ? true : false;
    
    
    
    
//     let count = 0;
//     let answer = false;
//     for (let i of s) {
//         if (i === '(') {
//             count += 1; 
//         } else if (i === ')') {
//             count -= 1; 
//         }

        
//         if (count < 0) {
//             return answer;
//         }
//     }

//     if(count === 0){
//         answer = true;
        
//     }
//     return answer;
    
    
}
