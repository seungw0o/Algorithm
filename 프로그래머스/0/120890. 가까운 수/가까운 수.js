function solution(array, n) {
     const diffs = array.map(v => Math.abs(v - n));
  const minDiff = Math.min(...diffs);
  
  // 최소 차이값과 같은 거리의 개수 확인
  const count = diffs.filter(d => d === minDiff).length;

  if (count > 1) {
    // 두 개 이상이면, 같은 거리 가진 원소들 중 가장 작은 값 리턴
    const candidates = array.filter((v, i) => Math.abs(v - n) === minDiff);
    return Math.min(...candidates);
  }

  // 유일하게 가까운 값이면 그거 리턴
  return array[diffs.indexOf(minDiff)];
}