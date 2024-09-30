function solution(citations) {
    let ans = 0;
    
    citations.sort((a,b) => b-a);
    // [6, 5, 3, 1, 0]
    for (let i=0; i<citations.length; i++) {
        if (i < citations[i])
            ans++;
    }
    
    return ans;
}