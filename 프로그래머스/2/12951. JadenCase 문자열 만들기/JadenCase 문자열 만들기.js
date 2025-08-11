function solution(s) {
  return s
    .split(' ')
    .map(word => {
      if (word === '') return '';
      const first = word[0];
      if (isNaN(first)) {
        return first.toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase(); 
      }
    })
    .join(' ');
}