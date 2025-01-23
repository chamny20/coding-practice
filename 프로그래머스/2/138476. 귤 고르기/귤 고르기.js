function solution(k, tangerine) {
    let ans = 0;
    let obj = {};
    
    tangerine.forEach((num) => {
        if (!obj[num]) obj[num] = 0;
        obj[num]++;
    });
    obj = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
    while (k > 0) {
        for (let [num, cnt] of obj) {
            if (k <= cnt) {
                ans++;
                k -= cnt;
                return ans;
            }
            if (k === 0) break;
            k -= cnt;
            ans++;
        }
    }
    
    return ans;
}

