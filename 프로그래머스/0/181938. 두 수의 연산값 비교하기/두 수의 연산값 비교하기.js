function solution(a, b) {
    const stringAB = a.toString() + b.toString();
    const numberAB = 2 * a * b;
    return parseInt(stringAB) > numberAB ? parseInt(stringAB) : numberAB;
}