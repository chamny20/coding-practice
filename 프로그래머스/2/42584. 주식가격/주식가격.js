function solution(prices) {
    let result = [];
    
    for (let i=0; i<prices.length; i++) {
        let cnt = 0;
        
        for (let j=i+1; j<prices.length; j++) {
            cnt++;
            if (prices[i] > prices[j]) {
                break;
            }
            // console.log(prices[i], prices[j], cnt);
        }
        result.push(cnt);
    }

    return result;
}