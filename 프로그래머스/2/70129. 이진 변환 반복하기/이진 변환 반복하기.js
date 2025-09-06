function solution(s) {
    let count = 0; 
    let zeroRemoved = 0;

    while (s !== "1") {
        const ones = s.replace(/0/g, "");
        zeroRemoved += s.length - ones.length;

    
        s = ones.length.toString(2);

        count++;
    }

  return [count, zeroRemoved];
}