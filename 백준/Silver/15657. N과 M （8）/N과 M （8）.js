const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(" ").map(Number);
const arr = input.shift().split(' ').map(Number).sort((a,b) => a-b);
const seq = Array(m).fill(0);

const dfs = (dep, start) => {
    if (dep === m) {
        console.log(seq.join(' '));
        return;
    }
    
    for (let i=start; i<n; i++) {
        seq[dep] = arr[i];
        dfs(dep+1, i);
    }
}

dfs(0, 0);
