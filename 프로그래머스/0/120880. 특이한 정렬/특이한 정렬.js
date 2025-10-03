function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const distA = Math.abs(a - n);
    const distB = Math.abs(b - n);

    if (distA === distB) {
      return b - a; 
    }
    return distA - distB; 
  });
}
