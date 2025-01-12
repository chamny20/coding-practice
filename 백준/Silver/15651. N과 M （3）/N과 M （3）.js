const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(" ").map(Number);
const seq = Array(m).fill(0);
let ans = '';

const dfs = (dep) => {
    if (dep === m) {
        ans += `${seq.join(' ')}\n`;
        return;
    }
    
    for (let i=1; i<=n; i++) {
        seq[dep] = i;
        dfs(dep + 1);
    }
}

dfs(0);
console.log(ans);