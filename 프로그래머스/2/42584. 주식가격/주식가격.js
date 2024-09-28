function solution(prices) {
    var ans = [];
    
    for (let i=0; i<prices.length; i++) {
        let cnt = 0;
        for (let j=i+1; j<prices.length; j++) {
            cnt++;
            if (prices[i] > prices[j]) {
                break;
            }
            // console.log("cnt:", cnt)
        }
        ans.push(cnt);
        // console.log("ans:", ans)
    }
    
    return ans;
}