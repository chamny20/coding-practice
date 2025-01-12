const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
let cnt = 0;
const visited1 = Array(n).fill(false);
const visited2 = Array(n).fill(false);
const visited3 = Array(n).fill(false);

const dfs = (dep) => {
    if (dep === n) {
        cnt++;
        return;
    }
    
    for (let i=0; i<n; i++) {
        if (visited1[i] || visited2[i+dep] || visited3[dep-i+n-1])
            continue;
        visited1[i] = true;
        visited2[dep+i] = true;
        visited3[dep-i+n-1] = true;
        dfs(dep + 1);
        visited1[i] = false;
        visited2[dep+i] = false;
        visited3[dep-i+n-1] = false;
    }
} 
    

dfs(0);
console.log(cnt);