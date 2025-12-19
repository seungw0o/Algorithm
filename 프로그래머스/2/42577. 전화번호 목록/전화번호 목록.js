function solution(phone_book) {
  const set = new Set(phone_book);

  for (const number of phone_book) {
    let prefix = "";
    for (const ch of number) {
      prefix += ch;
      if (set.has(prefix) && prefix !== number) {
        return false;
      }
    }
  }
  return true;
}