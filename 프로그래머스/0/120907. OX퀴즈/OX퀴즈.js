function solution(quiz) {
  return quiz.map((q) => {
    const tokens = q.split(" ").filter(Boolean);
    if (tokens.length < 5) return "X";

    const [aStr, op, bStr, eq, resultStr] = tokens;

    const a = Number(aStr);
    const b = Number(bStr);
    const expected = Number(resultStr);

    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(expected)) return "X";

    let actual;
    if (op === "+") actual = a + b;
    else if (op === "-") actual = a - b;
    else return "X"; 

    return actual === expected ? "O" : "X";
  });
}
