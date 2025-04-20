function solution(brown, yellow) {
    let ans = [0, 0];
    const area = brown + yellow;
    
    for (let h=3; h<=Math.sqrt(area); h++) {
        if (area % h === 0) {
            const w = area / h;
            
            const innerW = w - 2;
            const innerH = h - 2;
            
            if (innerW * innerH === yellow) {
                ans = [w, h];
            }
        }
    }
    
    return ans;
}