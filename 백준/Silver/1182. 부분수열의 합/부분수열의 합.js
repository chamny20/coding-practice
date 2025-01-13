const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

let cnt = 0;

const dfs = (idx, total) => {
    if (idx === n) {
        if (total === s) {
            cnt++;
            return;
        }
    } else {
        dfs(idx + 1, total);
        dfs(idx + 1, total + arr[idx]);
    }
    
}

dfs(0, 0);
if (s===0) cnt--;
console.log(cnt);