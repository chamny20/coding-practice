function solution(n, computers) {
    const graph = {};
    
    computers.forEach((computer, idx) => {
        graph[idx] = graph[idx] || [];
        
        for (let i=0; i<computer.length; i++) {
            if (idx !== i && computer[i]) {
                graph[idx].push(i);
            }
        }
    });
    
    let cnt = 0;
    const visited = Array(n).fill(false);
    
    const dfs = (start, visited) => {
        visited[start] = true;
        
        for (const neighbor of graph[start]) {
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