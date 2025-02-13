const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const t = Number(input.shift());
const result = [];

for (let i=0; i<t; i++) {
    const n = Number(input.shift());
    const arr = [];
    for (let j=0; j<2; j++) {
        const list = input.shift().split(' ').map(Number);
        arr.push(list);
    }
    // arr 사용
    const dp = Array.from(Array(3), () => Array(n).fill(0));
    
    dp[0][0] = 0;
    dp[1][0] = arr[0][0];
    dp[2][0] = arr[1][0];
    
    for (let k=1; k<n; k++) {
        // 아무것도 선택 안하기 패턴0 - 1, 2 모두 인접 가능
        dp[0][k] = Math.max(dp[1][k-1], dp[2][k-1]);
        // 패턴 1 - 2, 0 가능
        dp[1][k] = arr[0][k] + Math.max(dp[2][k-1], dp[0][k-1]);
        // 패턴 2 - 0, 1 가능
        dp[2][k] = arr[1][k] + Math.max(dp[1][k-1], dp[0][k-1]);
    }
    let ans = Math.max(...dp.map(row => row[n-1]));
    result.push(ans);
}

console.log(result.join('\n'));