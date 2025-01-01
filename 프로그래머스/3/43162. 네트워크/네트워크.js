function solution(n, computers) {
    const visited = Array(n).fill(false);
    
    const bfs = (start, visited, computers) => {
        const queue = [start];
        visited[start] = true;
                
        while (queue.length) {
            const cur = queue.shift();
            
            for (let next=0; next<n; next++) {
                if (computers[cur][next] && !visited[next]) {
                    queue.push(next);
                    visited[next] = true;
                }
            }
        }
    }
    
    let areaCnt = 0;
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            bfs(i, visited, computers);
            areaCnt++;
        }
    }
    
    return areaCnt;
}