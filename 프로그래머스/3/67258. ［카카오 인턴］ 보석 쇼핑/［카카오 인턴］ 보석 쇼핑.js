function solution(gems) {
    const typeCnt = new Set(gems).size; // 서로 다른 보석 종류
    let gemMap = new Map();
    
    let ans = [1, gems.length];
    gemMap.set(gems[0], 1);
    let l=0, r=0;
    
    while (r < gems.length) {
        if (gemMap.size === typeCnt) {
            if (ans[1] - ans[0] > r - l) 
                ans = [l+1, r+1];
            
            gemMap.set(gems[l], gemMap.get(gems[l]) - 1);
            // console.log("sss", gemMap);
            
            if (gemMap.get(gems[l]) === 0) 
                gemMap.delete(gems[l]);
            // console.log(gemMap);

            l++;
            
        } else {
            r++;
            const right = gemMap.get(gems[r]);
            gemMap.set(gems[r], right ? right + 1 : 1);
            // console.log(gemMap);
        }
    }
    
    return ans;
}