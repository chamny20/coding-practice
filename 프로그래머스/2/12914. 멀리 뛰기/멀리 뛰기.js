function solution(n) {
    const dp = Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 2;
    
    for (let i=2; i<n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    console.log(dp)
    
    return dp[n-1];
}