const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(" ").map(Number);
const arr = input.shift().split(' ').map(Number).sort((a,b) => a-b);
const seq = Array(m).fill(0);
let ans = '';

const dfs = (dep) => {
    if (dep === m) {
        ans += seq.join(' ') + '\n';
        return;
    }
    for (let i=0; i<n; i++) {
       seq[dep] = arr[i];
       dfs(dep+1); 
    }
}

dfs(0, 0);
console.log(ans);