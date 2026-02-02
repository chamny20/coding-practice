function solution(n, k) {
    const visited = Array(n+1).fill(false);
    const arr = Array.from(Array(n), (_, idx) => idx + 1);
    
    const list = [];
    
    let fact = [1];
    for (let i=1; i<=n; i++) {
        fact[i] = fact[i-1] * i;
    }
    
    k--;
    
    for (let i=n; i>0; i--) {
        const block = fact[i-1];
        const idx = Math.floor(k/block);
        
        list.push(arr[idx]);
        arr.splice(idx, 1);
        
        k %= block;
    }
    
    return list;
}


