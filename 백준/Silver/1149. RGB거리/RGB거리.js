const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const dp = input.map(li => li.split(' ').map(Number));

for (let i=1; i<n; i++) {
    dp[i][0] = dp[i][0] + Math.min(dp[i-1][1], dp[i-1][2]);
    dp[i][1] = dp[i][1] + Math.min(dp[i-1][0], dp[i-1][2]);
    dp[i][2] = dp[i][2] + Math.min(dp[i-1][0], dp[i-1][1]);
}

console.log(Math.min(...dp[n-1]));

