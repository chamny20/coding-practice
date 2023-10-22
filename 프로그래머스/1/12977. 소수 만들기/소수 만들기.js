function solution(nums) {
    
    let sum = 0;
    let len = nums.length;
    let cnt = 0;
    
    for(let i=0; i<len-2; i++) {
        for(let j = i+1; j<len-1; j++) {
            for(let k=j+1; k<len; k++) {
               sum = nums[i]+nums[j]+nums[k];
                console.log(sum);
                if(isPrime(sum))
                    cnt++;
            }
        }
    }
    return cnt;
}

function isPrime(number) {
    for(let i=2; i<number; i++) {
        if(number%i === 0)
            return false;
    }
    return true;
}