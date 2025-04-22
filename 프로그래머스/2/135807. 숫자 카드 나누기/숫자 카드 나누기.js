function solution(arrayA, arrayB) {
    // 1. A의 최대공약수가 B카드에선 나누어지면 안됨
    // 2. B의 최대공약수가 A카드에선 나누어지면 안됨
    
    // GCD function
    const GCD = (num1, num2) => {
        while (num2 !== 0) {
            [num1, num2] = [num2, num1 % num2];
        }
        return num1;
    }
    
    const getGcdArray = (arr) => {
        return arr.reduce((acc, cur, _) => GCD(acc, cur));
    }
    
    const gcdA = getGcdArray(arrayA);
    const gcdB = getGcdArray(arrayB);
    
    const isDivisible = (arr, divisor) => {
        return arr.every(num => num % divisor !== 0);
    }
    
    let ans = 0;
    
    const checkA = isDivisible(arrayA, gcdB);
    const checkB = isDivisible(arrayB, gcdA);
    
    if (checkA && checkB) 
        ans = Math.max(gcdA, gcdB);
    else if (checkA && !checkB) {
        ans = gcdB;
    } else if (!checkA && checkB) {
        ans = gcdA;
    }
    return ans;
}