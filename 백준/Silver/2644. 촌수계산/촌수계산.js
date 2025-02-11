const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const [a, b] = input.shift().split(" ").map(Number);
const m = Number(input.shift());

let graph = Array.from({length: n+1}, () => []);
let visited = new Array(n+1).fill(false);
let answer = 0;

for (let i=0; i<m; i++) {
    let [start, end] = input[i].split(" ").map(Number);
    graph[start].push(end);
    graph[end].push(start);
}

function dfs(start, depth) {
    if (start === b) {
        answer = depth;
    }
    
    for (let neighbor of graph[start]) {
        if (!visited[neighbor]) {
            visited[start] = true;
            dfs(neighbor, depth + 1);
        }
    }
}

dfs(a, 0);

answer ? console.log(answer) : console.log(-1);