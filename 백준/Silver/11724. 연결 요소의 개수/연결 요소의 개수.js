const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const graph = Array.from(Array(n+1), () => []);

for (let i=0; i<m; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    
    graph[u].push(v);
    graph[v].push(u);
}

const visited = Array(n+1).fill(false);

const dfs = (start) => {
    const neighbors = graph[start];
    visited[start] = true;
    
    for (const neighbor of neighbors) {
        if (!visited[neighbor])
            dfs(neighbor);
    }
}

let cnt = 0;
for (let i=1; i<=n; i++) {
    if (!visited[i]) {
        dfs(i);
        cnt++;
    }
}
console.log(cnt);