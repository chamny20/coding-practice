function solution(n, k) {
    var answer = 0;
    let num = n.toString(k);
    
    const isPrime = (num) => {
        if (num === 1 || num === 0) return false;
        if (num === 2) return true;
        
        for (let i=2; i<=Math.sqrt(num); i++) {
            if (num % i === 0)
                return false;
        }
        return true;
    }
        
    let arr = num.split('0').map(Number);
    arr.forEach(num => {
        if (isPrime(num)) 
            answer++
    });
               
    // console.log(arr)
    // console.log(num)
    return answer;
}