const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const [a, b] = input.shift().split(' ').map(Number);
const m = Number(input.shift());
const arr = input.map(line => line.split(' ').map(Number));
const graph = Array.from(Array(n+1), () => []);
const visited = Array(n+1).fill(false);

arr.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
});

let answer = 0;

const dfs = (dep, start) => {
    if (start === b) {
        answer = dep;
    }
    
    for (const neighbor of graph[start]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            dfs(dep + 1, neighbor);
        }
    }
}

dfs(0, a);
answer ? console.log(answer) : console.log(-1);
