function solution(prices) {
    const ans = [];
    
    for (let i=0; i<prices.length - 1; i++) {
        const price = prices[i];
        let cnt = 0;
        for (let j=i+1; j<prices.length; j++) {
            if (price <= prices[j]) {
                cnt++;
            } else {
                cnt += 1;
                break;
            }
        }
        ans.push(cnt);
        // console.log(ans)
    }
    ans.push(0);
    
    return ans;
}