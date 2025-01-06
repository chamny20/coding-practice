function solution(n, wires) {    
    let result = [];
    
    // 양방향 그래프 생성
    const graph = {};
    wires.forEach(([u, v]) => {
        if (!graph[u]) graph[u] = [];
        if (!graph[v]) graph[v] = [];
        graph[u].push(v);
        graph[v].push(u);
    });
    // console.log(graph);
    
    const dfs = (node, visited) => {
        let netSize = 1; // 현재 노드 하나 추가
        visited[node] = true;
        
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                netSize += dfs(neighbor, visited);
            }
        }
        return netSize;
    }
    
    for (let [u, v] of wires) {
        // 전선 제거하기
        graph[u] = graph[u].filter((node) => node !== v);
        graph[v] = graph[v].filter((node) => node !== u);
        
        const visited = new Array(n).fill(false);
        
        let networkSize = dfs(u, visited);
        let otherNetworkSize = n - networkSize;
        
        result.push(Math.abs(networkSize - otherNetworkSize));
        
        // 전선 복구
        graph[u].push(v);
        graph[v].push(u);
    }
    
    return Math.min(...result);
}