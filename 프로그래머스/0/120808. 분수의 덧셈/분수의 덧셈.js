function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function solution(numer1, denom1, numer2, denom2) {
    
    const commonDenom = denom1 * denom2; 
    numer1 *= denom2; 
    numer2 *= denom1; 

    const numeratorSum = numer1 + numer2; 

    
    const commonGCD = gcd(numeratorSum, commonDenom);

    return [numeratorSum / commonGCD, commonDenom / commonGCD]; 
}