const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number).sort((a,b) => a-b);
const visited = Array(n).fill(false);
const seq = Array(m).fill(0);
const ans = new Set();

const dfs = (dep, start) => {
    if (dep === m) {
        ans.add(seq.join(' '));
        return;
    }
    
    for (let i=start; i<n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            seq[dep] = arr[i];
            dfs(dep + 1, i+1);
            visited[i] = false;
        }
    }
}

dfs(0, 0);
console.log([...ans].join('\n'));
