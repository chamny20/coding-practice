const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, k] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

let ans = 0;

const dfs = (idx, val, visited) => {
    visited[idx] = true;
    
    const diff = val + (arr[idx] - k);
    if (diff < 500) return;
    
    const isFinished = visited.every(i => i === true);
    if (isFinished) {
        ans++;
        return;
    } 
    
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            //const diff = val + (arr[i] - k);
            //if (diff < 500) return;
            
            visited[i] = true;
            dfs(i, diff, visited);
            visited[i] = false;
        }
    }
}


for (let i=0; i<n; i++) {
    const visited = Array(n).fill(false);
    dfs(i, 500, visited);
}

console.log(ans);