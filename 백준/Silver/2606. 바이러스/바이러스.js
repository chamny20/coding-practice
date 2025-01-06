const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const cnt = Number(input.shift());
let arr = input.map((v) => v.split(" ").map(Number));

let graph = {};
// 인접리스트 그래프 만들기
arr.map(([u, v]) => {
   if (!graph[u]) graph[u] = [];
   graph[u].push(v);
    
   if (!graph[v]) graph[v] = [];
   graph[v].push(u);
});

const dfs = (node, visited, result) => {
    visited.add(node);
    result.push(node);
    
    (graph[node] || []).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
            dfs(neighbor, visited, result);
        }
    });
}

const visited = new Set();
const result = [];
dfs(1, visited, result);

console.log(result.length-1);