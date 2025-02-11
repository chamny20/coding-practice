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


const dfs = (start) => {
    if (!visited.includes(false)) {
        return;
    }
    
    for (let i of graph[start]) {
        if (visited[i] === false) {
            visited[i] = true;
            dfs(i);
        }
    }
}

let count = 0;

for (let i=1; i<=n; i++) {
    if (visited[i] === false) {
        count++;
        dfs(i);
    }
}

console.log(count);