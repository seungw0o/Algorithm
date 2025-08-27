function solution(n, m) {
    function GCD(a,b){
        if(a%b === 0){
            return b
        }
         return GCD(b, a % b)
    }
    function LCM(a,b){
        return (a*b) / GCD(a,b)
    }
    return [GCD(m,n),LCM(m,n)];
}