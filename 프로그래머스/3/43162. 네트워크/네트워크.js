function solution(n, computers) {
    const graph = {};
    
    for (let i=0; i<n; i++) {
        graph[i] = graph[i] || [];
        
        for (let j=0; j<n; j++) {
            if (computers[i][j] && i !== j) {
                graph[i].push(j);
            }
        }
    }

    let cnt = 0;
    const visited = Array(n).fill(false);
    
    const dfs = (idx, visited) => {
        visited[idx] = true;
        
        for (const neighbor of graph[idx]) {
            if (!visited[neighbor]) {
                dfs(neighbor, visited);
            }
        }
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            dfs(i, visited);
            cnt++;
        }
    }
    
    return cnt;
}