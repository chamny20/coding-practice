const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
// nxn
const maps = [];
const dp = Array.from(Array(n), () => Array.from(Array(n), () => Array(3).fill(0)));
dp[0][1][0] = 1;

// 방향 d => 0: 가로, 1: 세로, 2: 대각선

for (let i=0; i<n; i++) {
    const line = input[i].split(' ').map(Number);
    maps.push(line);
}

for (let i=1; i<n; i++) {
    for (let j=2; j<n; j++) {
        if (!maps[0][j]) {
            dp[0][j][0] = dp[0][j-1][0];
        }
        
        // 가로
        if (!maps[i][j] && !maps[i][j-1]) {
            dp[i][j][0] = dp[i][j-1][0] + dp[i][j-1][2];
        }
        // 세로
        if (!maps[i][j] && !maps[i-1][j]) {
            dp[i][j][1] = dp[i-1][j][1] + dp[i-1][j][2];
        }
        // 대각선
        if (!maps[i][j] && !maps[i][j-1] && !maps[i-1][j] && !maps[i-1][j-1])
            dp[i][j][2] = dp[i-1][j-1][0] + dp[i-1][j-1][1] + dp[i-1][j-1][2];
    } 
}

const ans = dp[n-1][n-1][0] + dp[n-1][n-1][1] + dp[n-1][n-1][2];
console.log(ans);