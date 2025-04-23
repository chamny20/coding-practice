function solution(w, h) {
    // gcd
    const gcd = (num1, num2) => {
        while (num2 !== 0) {
            [num1, num2] = [num2, num1 % num2];
        }
        return num1;
    }
    
    const getMinCnt = (a, b) => {
        return a + b - gcd(a, b);
    }
    
    let gcdVal = gcd(w, h);
    const [a, b] = [w / gcdVal, h / gcdVal];
    
    let answer = w * h - gcdVal * getMinCnt(a, b);
    
    return answer;
}