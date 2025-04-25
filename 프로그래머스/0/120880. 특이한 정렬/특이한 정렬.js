function solution(numlist, n) {
    const obj = {};
    numlist.forEach((num, idx) => {
        obj[num] = obj[num] || 0;
        obj[num] = (Math.abs(n - num));
    });
    
    const arr = Object.keys(obj).sort((a, b) => {
        if (obj[a] === obj[b]) 
            return b - a;
        return obj[a] - obj[b];
    });
    
    
    return arr.map(el => +el);
}