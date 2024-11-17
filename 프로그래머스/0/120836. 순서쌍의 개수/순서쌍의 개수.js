function solution(n) {
    var answer = 0;
    let result = []
    let index = 1;
    
    while (index <= n) {
      if (n % index === 0) result.push(index)
      index++
    }
    return result.length;
}

// 1 2 4 5 10 20
// 1 2 4 5 20 25 50 100