function solution(n, wires) {    
    const graph = {};
    wires.forEach((wire) => {
        const [a, b] = wire;
        graph[a] = graph[a] || [];
        graph[b] = graph[b] || [];
        graph[a].push(b);
        graph[b].push(a);
    })
    console.log(graph);
    
    const dfs = (node, visited) => {
        let cnt = 1;
        visited[node] = true;
        
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                cnt += dfs(neighbor, visited);
                
            }
        }
        return cnt;
    }
    
    const result = [];
    
    for (const [u, v] of wires) {
        // 전선 제거
        graph[u] = graph[u].filter((node) => node !== v);
        graph[v] = graph[v].filter((node) => node !== u);
        
        const visited = Array(n).fill(false);
        const netSize = dfs(u, visited);
        const otherNetSize = n - netSize;
        
        result.push(Math.abs(netSize - otherNetSize));
        
        // 복구
        graph[u].push(v);
        graph[v].push(u);
    }
    return Math.min(...result)
}