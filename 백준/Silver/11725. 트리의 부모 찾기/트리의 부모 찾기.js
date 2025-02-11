const input = require('fs').readFileSync("/dev/stdin", 'utf8').trim().split('\n');
const n = Number(input.shift());
const arr = input.map(line => line.split(' ').map(Number));
const graph = Array.from(Array(n+1), () => []);
const result = Array.from(Array(n+1), () => 0);

arr.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
});

const dfs = (node) => {
    for (const next of graph[node]) {
        if (!result[next]) {
            result[next] = node;
            dfs(next); // 재귀 호출로 다음 노드 탐색
        }
    }
}

result[1] = 1;
dfs(1);
console.log(result.slice(2).join('\n'));
