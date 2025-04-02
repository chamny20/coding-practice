function solution(genres, plays) {
    const obj = {};
    const sumObj = {};
    const ans = [];
    
    genres.forEach((genre, idx) => {
        obj[genre] = obj[genre] || [];
        sumObj[genre] = sumObj[genre] || 0;
        obj[genre].push([plays[idx], idx]);
        sumObj[genre] += plays[idx];
    })
    
    // console.log(obj, sumObj);
    let order = Object.keys(sumObj).sort((a, b) => sumObj[b] - sumObj[a]);
    for (const key of order) {
        let arr = obj[key].sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            return b[0] - a[0];
        });
        
        arr.slice(0, 2).forEach(([num, idx]) => {
            ans.push(idx);
        })
        // console.log(arr, ans)
    }
    
    
    return ans;
}

