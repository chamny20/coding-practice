const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);

const dp = Array.from(Array(n), () => 1);

for (let i=1; i<n; i++) {
    for (let j=0; j<i; j++) {
        if (arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}
console.log(Math.max(...dp));