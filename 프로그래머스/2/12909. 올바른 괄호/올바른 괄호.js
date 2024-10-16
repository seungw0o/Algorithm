function solution(s) {
    let count = 0;

    for (let i of s) {
        if (i === '(') {
            count += 1; 
        } else if (i === ')') {
            count -= 1; 
        }

        
        if (count < 0) {
            return false;
        }
    }


    return count === 0;
}
