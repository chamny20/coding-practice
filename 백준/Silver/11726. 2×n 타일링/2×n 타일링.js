const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());

const dp = Array(1000).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i=4; i<=1000; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % 10007;
}

console.log(dp[n]);