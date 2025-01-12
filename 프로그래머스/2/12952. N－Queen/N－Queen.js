function solution(n) {
    var answer = 0;
    const visited1 = Array(n).fill(false);
    const visited2 = Array(n).fill(false);
    const visited3 = Array(n).fill(false);
    
    const dfs = (dep) => {
        if (dep === n) {
            answer++;
            return;
        }
        
        for (let i=0; i<n; i++) {
            if (visited1[i] || visited2[dep+i] || visited3[dep-i+n-1]) {
                continue;
            } 
            visited1[i] = visited2[dep+i] = visited3[dep-i+n-1] = true;
            dfs(dep + 1);
            visited1[i] = visited2[dep+i] = visited3[dep-i+n-1] = false;
            
        }
    }
    
    dfs(0);
    
    return answer;
}