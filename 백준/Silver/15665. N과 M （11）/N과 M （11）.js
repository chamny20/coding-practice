const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number).sort((a,b) => a-b);
const seq = Array(m).fill(0);
let ans = new Set();

const dfs = (dep) => {
    if (dep === m) {
        ans.add(seq.join(' '));
        return;
    }
    for (let i=0; i<n; i++) {
        seq[dep] = arr[i];
        dfs(dep + 1);
    }
}

dfs(0);
console.log([...ans].join('\n'));