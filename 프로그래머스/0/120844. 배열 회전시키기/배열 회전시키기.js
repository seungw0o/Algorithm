function solution(numbers, direction) {
    if (direction === 'right') {
    const last = numbers.pop(); // 마지막 꺼냄
    numbers.unshift(last);      // 앞에 넣음
  } else if (direction === 'left') {
    const first = numbers.shift(); // 첫 번째 꺼냄
    numbers.push(first);           // 뒤에 넣음
  }
  return numbers;
}