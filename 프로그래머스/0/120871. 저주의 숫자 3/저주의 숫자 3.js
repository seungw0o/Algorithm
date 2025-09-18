function solution(n) {
  let num = [];
  let count = 1;


  while (num.length < n) {
    if (count % 3 !== 0 && !count.toString().includes("3")) {
      num.push(count);
    }
    count++;
  }

  return num[n - 1];
}