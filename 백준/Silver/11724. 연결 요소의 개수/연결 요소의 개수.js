const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.map(line => line.split(' ').map(Number));

const graph = Array.from(Array(n + 1), () => []);
const visited = Array.from(Array(n + 1), () => false);

arr.forEach(item => {
    const [u, v] = item;
    graph[u].push(v);
    graph[v].push(u);
})

const bfs = (start) => {
    const queue = [start];
    
    while (queue.length) {
        const cur = queue.shift();
        
        for (const v of graph[cur]) {
            if (!visited[v]) {
                visited[v] = true;
                queue.push(v);
            }
        }
    }
}

let count = 0;

for (let i=1; i<=n; i++) {
    if (!visited[i]) {
        count++;
        bfs(i);
    }
}

console.log(count);