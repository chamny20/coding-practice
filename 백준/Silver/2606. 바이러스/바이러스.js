let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let comLen = Number(input.shift());
let n = Number(input.shift());
let ans = 0;
let graph = Array.from({length: comLen + 1}, () => []);
let visited = new Array(comLen+1).fill(false);

for (let i=0; i<n; i++) {
    let [start, end] = input[i].split(" ").map(Number);
    graph[start].push(end);
    graph[end].push(start);
}

function dfs(start) {
    for (let end of graph[start]) {
        if (!visited[end]) {
            visited[end] = true;
            ans++;
            dfs(end);
        }
    }
}

visited[1] = true;
dfs(1);
console.log(ans);