const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const t = Number(input.shift());
const dp = Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= 100; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
}

for (let i=0; i<t; i++) {
    const n = Number(input.shift());
    console.log(dp[n]);
}