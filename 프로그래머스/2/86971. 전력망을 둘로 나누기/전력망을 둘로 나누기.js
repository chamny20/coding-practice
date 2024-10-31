function solution(n, wires) {    
    let answer = Infinity;
    
    let visited = Array.from({length: n + 1}, () => false);
    
    // 1. 그래프 생성
    const graph = Array.from({length: n + 1}, () => []);
    
    for (const [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }

    let count = 1;
    
    // DFS function
    function dfs(node, visited) {
       visited[node] = true;
        let count = 1;
        
        for (let adjNode of graph[node]) {
            if (!visited[adjNode])
                count += dfs(adjNode, visited);
        }
        return count;
    }
    
    
    for (let [a, b] of wires) {
        let visited = Array(n+1).fill(false);
        
        graph[a] = graph[a].filter(node => node !== b);
        graph[b] = graph[b].filter(node => node !== a);
        
        const countA = dfs(a, visited);
        const diff = Math.abs(countA - (n - countA));
        answer = Math.min(diff, answer);
        
        graph[a].push(b);
        graph[b].push(a);
    }
    
    
    return answer;
}