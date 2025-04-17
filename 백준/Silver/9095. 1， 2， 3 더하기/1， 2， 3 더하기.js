const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const t = Number(input.shift());
// n < 11 조건
const dp = Array(11).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i=4; i<11; i++) {
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
}

const ans = [];
for (let i=0; i<t; i++) {
    const n = Number(input.shift());
    ans.push(dp[n]);
}

console.log(ans.join("\n"));