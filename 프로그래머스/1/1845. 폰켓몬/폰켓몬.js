function solution(nums) {
    const n = nums.length / 2;
    const numSet = new Set(nums);
    
    return numSet.size <= n ? numSet.size : n;
}

    
