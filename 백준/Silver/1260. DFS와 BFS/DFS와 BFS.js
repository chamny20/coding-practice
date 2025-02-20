const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m, v] = input.shift().split(' ').map(Number);
const arr = input.map(line => line.split(' ').map(Number));

const graph = Array.from(Array(n+1), () => []);
// graph 만들기

arr.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
});

graph.forEach(adjL => adjL.sort((a, b) => a-b));

const visited = new Array(n+1).fill(false);
let dfsList = [];
const dfs = (start) => {
    if (!visited[start]) {
        visited[start] = true;
        dfsList.push(start);
        const adjList = graph[start];
        for (let i=0; i<adjList.length; i++) {
            let next = adjList[i];
            if (!visited[next]) {
                dfs(next);
            }
        }
    }
}

dfs(v);
console.log(dfsList.join(' '));

visited.fill(0);
let bfsList = [];
const bfs = (start) => {
    const queue = [start];
    visited[start] = true;
    
    while (queue.length) {
        const cur = queue.shift();
        bfsList.push(cur);
        const adjList = graph[cur];
        
        for (let i=0; i<graph[cur].length; i++) {
            let next = adjList[i];
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }
}

bfs(v);
console.log(bfsList.join(' '));