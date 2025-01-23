function solution(d, budget) {
    d.sort((a, b) => a-b);
    let sum = 0;
    let i = 0;
    const ans = [];
    
    for (let i=0; i<d.length; i++) {
        if (sum + d[i] > budget) break;
        
        sum += d[i];
        ans.push(d[i]);
    }
    return ans.length;
    
}