function solution(brown, yellow) {
    // b + y = 12
    const sum = brown + yellow;
    let ans = [0, 0];
    
    for (let h=3; h<=Math.sqrt(sum); h++) {
        if (sum % h === 0) {
            const w = sum / h;
            const innerW = w - 2;
            const innerH = h - 2;
            
            if (innerW * innerH === yellow) 
                ans = [w, h];
        } 
    }
    
    return ans;
}