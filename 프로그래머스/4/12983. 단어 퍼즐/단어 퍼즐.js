function solution(strs, t) {
    const n = t.length;
    const dp = Array(n+1).fill(0);
    const setStr = new Set(strs);
   
    for (let i=1; i<=n; i++) {
        dp[i] = Infinity;
        // console.log('i', i);
        for (let j=1; j<Math.min(i+1, 6); j++) {
            const start = i-j;
            const end = i;
            
            if (setStr.has(t.slice(start, end))) {
                dp[i] = Math.min(dp[i], dp[i-j] + 1);
            }
            // console.log('dp',dp)
        }
    }

    // console.log('final', dp)

    return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}