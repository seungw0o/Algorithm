function solution(array) {
    let map = new Map();
    array.forEach((value) => {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1); // 있으면 +1
        } else {
            map.set(value, 1); // 없으면 1
        }
    });
    const maxValue = Math.max(...map.values());
    
     const maxKeys = [...map.entries()]
    .filter(([key, val]) => val === maxValue)
    .map(([key]) => key);
    


  return maxKeys.length > 1 ? -1 : maxKeys[0];
}