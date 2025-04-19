function solution(numbers, target) {
    let ans = 0;
    
    const dfs = (idx, curSum) => {
        if (idx === numbers.length) {
            if (curSum === target)
                ans++;
            return;
        }
        
        dfs(idx+1, curSum + numbers[idx]);
        dfs(idx+1, curSum - numbers[idx]);
    }
    
    dfs(0, 0);
    
    return ans;
}