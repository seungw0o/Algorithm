function solution(numbers) {
    
    const sortArr = numbers.sort((a, b) => a - b); 
    
    const minProduct = sortArr[0] * sortArr[1]; 
    const maxProduct = sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2]; 

    
    return Math.max(minProduct, maxProduct);
}
