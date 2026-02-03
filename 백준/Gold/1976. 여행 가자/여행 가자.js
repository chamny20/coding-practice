const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input.shift());
const M = Number(input.shift());
let graph = {};

for (let i=0; i<N; i++) {
    const arr = input[i].split(' ').map(Number);
    graph[i+1] = [];

    arr.forEach((num, idx) => {
        if (num === 1) {
            graph[i+1].push(idx + 1);
        }
    });
}

const planList = input[N].split(' ').map(Number);


const dfs = (start, target, visited) => {
    if (target === start) return true;
    visited[start] = true;
     
    for (const next of graph[start]) {
        if (!visited[next]) {
            if (dfs(next, target, visited))
                return true;
        }
    }
    
    return false;
}

 
for (let i=0; i<planList.length - 1; i++) {
    const cur = planList[i];
    const next = planList[i+1];
    const visited = Array(N+1).fill(false);

    const isAvail = dfs(cur, next, visited);
    if (!isAvail) {
        console.log('NO');
        return;
    }
}

console.log("YES")