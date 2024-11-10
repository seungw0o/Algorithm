function solution(box, n) {
    let x = parseInt(box[0] / n);
    let y = parseInt(box[1] / n);
    let z = parseInt(box[2] / n);
    
    return (x * y) * z;
    
    
}