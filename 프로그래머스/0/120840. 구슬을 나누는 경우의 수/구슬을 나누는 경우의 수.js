function solution(balls, share) {
  function factorial(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const n = BigInt(balls);
  const r = BigInt(share);

  const answer = factorial(n) / (factorial(n - r) * factorial(r));
  return Number(answer); 
}
