const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(" ").map(Number);
const arr = input.shift().split(' ').map(Number).sort((a,b) => a-b);
const seq = Array(m).fill(0);
const ans = new Set();
const visited = Array(n).fill(false);

const dfs = (dep) => {
    if (dep === m) {
        ans.add(seq.join(' '));
        return;
    }
    
    for (let i=0; i<n; i++) {
        if(!visited[i]) {
            if (i > 0 && arr[i] === arr[i - 1] && !visited[i - 1]) {
                continue;
            }
            visited[i] = true;
            seq[dep] = arr[i];
            dfs(dep + 1);
            visited[i] = false;
            
        }
    }
}

dfs(0);
console.log([...ans].join('\n'));