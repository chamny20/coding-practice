function solution(numbers) {
    const arr = numbers.split('').map(Number);
    const ans = [];
    
    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num === 2) return true;
        
        for (let i=2; i<=Math.sqrt(num); i++) {
            if (num % i === 0)
                return false;
        }
        return true;
    }
    
    const getPermutation = (arr, fixed) => {
        if (arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newNum = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                
                if (!ans.includes(+newNum) && isPrime(+newNum)) {
                    ans.push(+newNum);
                }
                getPermutation(copyArr, newNum);
            }
        }
    }
    
    getPermutation(arr, '');
    
    return ans.length;
}