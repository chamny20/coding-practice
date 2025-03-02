const input = require('fs').readFileSync("/dev/stdin", 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const graph = {};
for (let i = 1; i <= n; i++) {
    graph[i] = [];
}

for (let i=0; i<n-1; i++) {
    const [a, b, distance] = input.shift().split(' ').map(Number);
    graph[a].push({ node: b, dist: distance });
    graph[b].push({ node: a, dist: distance });
}

const bfs = (start, target) => {
    const visited = Array(n).fill(false);
    const queue = [[start, 0]]; // 거리 0부터 시작
    visited[start] = true;
    
    while (queue.length) {
        const [curNode, dis] = queue.shift();
        
        if (curNode === target) return dis;
        
        for (const {node: neighbor, dist: dist} of graph[curNode]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push([neighbor, dis + dist]);
            }
        }
    }
    return -1;
}

for (let i=0; i<m; i++) {
    const [u, v] = input.shift().split(' ').map(Number);
    console.log(bfs(u, v));
}