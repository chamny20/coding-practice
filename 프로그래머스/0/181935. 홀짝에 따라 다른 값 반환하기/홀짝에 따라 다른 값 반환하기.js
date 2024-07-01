function solution(n) {
    let sum = 0;
    
    if (n % 2 == 0) {
        while(n>=1) {
            sum += n*n;
            n -= 2;
        }
    } else {
         while(n>=1) {
            sum += n;
            n -= 2;
        }
    }
    
    return sum;
}