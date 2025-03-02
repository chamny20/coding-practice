const input = require('fs').readFileSync("/dev/stdin", 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.map(line => line.split(' ').map(Number));

// 인접 graph 생성
const graph = {};
arr.forEach(([u, v]) => {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
});

const bfs = (start, target) => {
    const queue = [[start, 0]]; // distance
    const visited = Array(n+1).fill(false);
    visited[start] = true;
    
    while (queue.length) {
        const [cur, dis] = queue.shift();
        
        if (cur === target) return dis;
        
        for (const neighbor of graph[cur]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push([neighbor, dis + 1]);
            }
        }
    }
    return -1;
}

const result = [];
for (let i=1; i<=n; i++) {
    let sum = 0;
    for (let j=1; j<=n; j++) {
        if (i!==j)
            sum += bfs(i, j);
    }
    result.push(sum);
}

let minVal = Math.min(...result);
console.log(result.indexOf(minVal) + 1);