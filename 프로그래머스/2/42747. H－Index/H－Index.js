function solution(citations) {
    const n = citations.length;
    citations.sort((a, b) => b - a);
    
    let ans = 0;
    for (let i=0; i<n; i++) {
        if (i < citations[i])
            ans++;
    }
    return ans;
}