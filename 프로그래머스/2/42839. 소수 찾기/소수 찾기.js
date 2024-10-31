function solution(numbers) {
    var answer = [];
    let arr = numbers.split("").map(Number);
    
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i=2; i*i<=num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    function getPermutation(arr, fixed) {
        if (arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newNum = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                
                if (!answer.includes(+newNum) && isPrime(+newNum)) {
                    answer.push(+newNum);
                }
                
                getPermutation(copyArr, newNum);
            }
        }
    }
    
    getPermutation(arr, '');
    
    return answer.length;
}

/*
[1, 7] => 1, 7, 17, 71 
[0, 1, 1] => [0], [1], [2], [0][1], [0][2], [1][0], [1][2], [2][0], [2][1]


*/