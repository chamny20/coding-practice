const input = require('fs').readFileSync("/dev/stdin", 'utf8').trim().split('\n');
const n = Number(input.shift());
const arr = input.map(line => line.split(' ').map(Number));
const graph = Array.from(Array(n+1), () => []);
const result = Array.from(Array(n+1), () => 0);

arr.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
});

const bfs = (start) => {
    const queue = [start];
    
    while (queue.length) {
        const cur = queue.shift();
        
        for (const vertex of graph[cur]) {
            if (!result[vertex]) {
                result[vertex] = cur;
                queue.push(vertex);
            }
        }
    }
}

result[1] = true;
bfs(1);
console.log(result.slice(2).join('\n'));
