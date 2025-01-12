const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number).sort((a,b) => a-b);
const seq = Array(m).fill(0);
const ans = new Set();

const dfs = (dep, start) => {
    if (dep === m) {
        ans.add(seq.join(' '));
        return;
    }
    for (let i=start; i<n; i++) {
        seq[dep] = arr[i];
        dfs(dep+1, i);
    }
}

dfs(0, 0);
console.log([...ans].join('\n'));