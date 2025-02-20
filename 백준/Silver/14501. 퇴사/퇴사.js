const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const arr = input.map(line => line.split(' ').map(Number));

const dp = new Array(n).fill(0);

for (let i=0; i<n; i++) {
    const [t, p] = arr[i];
    if (i + t > n) continue;
    
    dp[i] = dp[i] + p;
    
    for (let j=i+t; j<n; j++) {
        dp[j] = Math.max(dp[j], dp[i]);
    }
    // console.log(dp);
}

console.log(Math.max(...dp));