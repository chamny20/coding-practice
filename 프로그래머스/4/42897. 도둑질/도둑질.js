function solution(money) {
    const n = money.length;
    
    // 첫 번째 집을 터는 경우
    const dp1 = Array(n).fill(0);
    dp1[0] = money[0];
    dp1[1] = dp1[0];
    for (let i=2; i<n-1; i++) { // 마지막 집은 털 수 없음
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + money[i]);
        // console.log(dp1[i-1], '과 비교', dp1[i-2] + money[i])
    }
    // console.log('dp1', dp1);
    
    // 첫 번째 집을 털지 않는 경우
    const dp2 = Array(n).fill(0);
    dp2[0] = 0;
    dp2[1] = money[1];
    for (let i=2; i<n; i++) {
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + money[i]);
    }
    // console.log('dp2', dp2);
    
    return Math.max(dp1[n-2], dp2[n-1]);
}