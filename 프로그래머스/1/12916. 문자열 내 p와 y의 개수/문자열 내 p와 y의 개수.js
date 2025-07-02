function solution(s) {
  let p = 0;
  let y = 0;
  let arrS = String(s).split("");

  arrS.forEach((value) => {
    if (value.toLowerCase() === "p") {
      p += 1;
    } else if (value.toLowerCase() === "y") {
      y += 1;
    }
  });

  return p === y;
}
