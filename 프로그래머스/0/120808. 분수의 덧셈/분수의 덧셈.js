function gcd(a, b) {
    // 최대 공약수(GCD)를 찾는 함수
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function solution(numer1, denom1, numer2, denom2) {
    // 두 분수를 같은 분모로 변환하여 더하기
    const commonDenom = denom1 * denom2; // 공통 분모
    numer1 *= denom2; // 첫 번째 분자의 분모에 두 번째 분모를 곱함
    numer2 *= denom1; // 두 번째 분자의 분모에 첫 번째 분모를 곱함

    const numeratorSum = numer1 + numer2; // 분자 합산

    // 기약 분수로 만들기 위해 최대 공약수로 나눔
    const commonGCD = gcd(numeratorSum, commonDenom);

    return [numeratorSum / commonGCD, commonDenom / commonGCD]; // 기약 분수 반환
}