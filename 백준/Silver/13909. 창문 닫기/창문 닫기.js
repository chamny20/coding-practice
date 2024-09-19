const n = require('fs').readFileSync("/dev/stdin").toString().trim();
let ans = 0;
for (let i=1; i*i<=n; i++) {
    ans++;
}

console.log(ans);