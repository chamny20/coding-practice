function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);

    function dfs(idx, computers, visited) {
        visited[idx] = true;
        
        for (let i=0; i<computers.length; i++) {
            if (!visited[i] && computers[idx][i] === 1) 
                dfs(i, computers, visited);
        }
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            dfs(i, computers, visited);
            answer++;
        }
    }
    
    
    return answer;
}