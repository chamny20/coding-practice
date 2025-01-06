function solution(numbers, target) {
    let answer = 0;
    const visited = {};
    const result = [];
    
    const dfs = (idx, currentSum) => {
        if (idx === numbers.length) {
            if (currentSum === target)
                answer++;
            return;
        }
        
        dfs(idx+1, currentSum + numbers[idx]);
        dfs(idx+1, currentSum - numbers[idx]);
    }
    
    
    dfs(0, 0)
    
    return answer;
}