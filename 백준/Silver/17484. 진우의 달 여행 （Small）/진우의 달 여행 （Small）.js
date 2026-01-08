const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const maps = [];
for (let i=0; i<n; i++) {
    maps.push(input[i].split(' ').map(Number));
}

// dp
const dp = Array.from(Array(n), () => Array.from(Array(m), () => Array(3).fill(Infinity)));
for (let i=0; i<m; i++) {
    dp[0][i][0] = maps[0][i];
    dp[0][i][1] = maps[0][i];
    dp[0][i][2] = maps[0][i];
}

for (let row=1; row<n; row++) {
    for (let col=0; col<m; col++) {
        if (col + 1 < m) { // dir === 0
            dp[row][col][0] = maps[row][col] + 
                Math.min(dp[row-1][col+1][1], dp[row-1][col+1][2]);
        }
        
        // dir === 1
        dp[row][col][1] = maps[row][col] +
            Math.min(dp[row-1][col][0], dp[row-1][col][2]);
        
        if (col - 1 >= 0) { // dir === 2
            dp[row][col][2] = maps[row][col] +
                Math.min(dp[row-1][col-1][0], dp[row-1][col-1][1]);
        }
      

    }
}

let ans = Infinity;
for (let i=0; i<m; i++) { 
    ans = Math.min(ans, dp[n-1][i][0], dp[n-1][i][1], dp[n-1][i][2]);
}
console.log(ans);