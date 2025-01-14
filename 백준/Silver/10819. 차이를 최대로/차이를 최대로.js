const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
const seq = Array(n).fill(0);
const visited = Array(n).fill(false);
const results = [];

const dfs = (dep) => {
    if (dep === n) {
        // 차이값 계산
        let sum = 0;
        for (let i=1; i<seq.length; i++) {
            sum += Math.abs(seq[i] - seq[i-1]);
        }
        results.push(sum);
        return;
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            seq[dep] = arr[i];
            dfs(dep + 1);
            visited[i] = false;
        }
    }
}

dfs(0);
console.log(Math.max(...results));