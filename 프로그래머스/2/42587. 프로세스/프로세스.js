function solution(priorities, location) {
    const n = priorities.length;
    const arr = Array.from(Array(n), (_, idx) => idx);
    
    let max = priorities[0];
    let ans = 0;
    
    while (priorities.length) {
        max = Math.max(...priorities);
        
        if (max > priorities[0]) {
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        } else {
            ans++;
            priorities.shift();
            if (arr.shift() === location)
                return ans;
        }
    }
    return ans;
}