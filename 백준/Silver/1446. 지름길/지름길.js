const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, D] = input.shift().split(' ').map(Number);
const graph = Array.from(Array(D+1), () => []);

for (let i=0; i<N; i++) {
    const [start, end, cost] = input[i].split(' ').map(Number);
    
    if (end > D) continue;
    if (end - start <= cost) continue;
    
    graph[start].push([end, cost]);  
}

// 0: [50, 10]
// 50: [100, 10]

const dp = Array.from(Array(D+1), (_, idx) => idx);
dp[0] = 0;

for (let i=0; i<=D; i++) {
    // 일단 이동
    if (i+1 <= D) {
        dp[i+1] = Math.min(dp[i+1], dp[i] + 1);
    }
    
    // 지름길
    for (const [end, cost] of graph[i]) {
        dp[end] = Math.min(dp[end], dp[i] + cost);
    }
}

console.log(dp[D]);

