function solution(array) {
    let count = 0;
    
    array.forEach((item) => {
        let itemArr = String(item).split("");
        
        itemArr.forEach((item) => {
            if(item === "7"){
                count++;
            }
        })
    })
    
    return count;
}