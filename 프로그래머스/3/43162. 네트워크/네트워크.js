function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    const graph = {};
    // 양방향 그래프 생성
    for (let i=0; i<n; i++) {
        graph[i] = [];
        for (let j=0; j<n; j++) {
            if (i!==j && computers[i][j]===1) 
                graph[i].push(j);
        }
    }
    
    const dfs = (idx, visited) => {
        visited[idx] = true;
        
        for (let neighbor of graph[idx]) {
            if (!visited[neighbor]) {
                dfs(neighbor, visited);
            }
        }
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            dfs(i, visited);
            answer++;
        }
    }
    
    
    return answer;
}