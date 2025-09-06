function solution(spell, dic) {
    for (const str of dic) {
        const isValid = spell.every(ch => str.includes(ch));
        if (isValid) return 1;
    }
  return 2;
    
}