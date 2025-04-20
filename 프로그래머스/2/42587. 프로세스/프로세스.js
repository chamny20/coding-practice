function solution(priorities, location) {
    let max = Math.max(...priorities);
    const n = priorities.length;
    
    const arr = Array.from(Array(n), (_, idx) => idx);
    let cnt = 0;
    
    while (priorities.length) {
        max = Math.max(...priorities);
        
        if (priorities[0] === max) {
            cnt++;
            priorities.shift();
            if (arr.shift() === location)
                return cnt;
        } else {
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        }
    }
    
    return cnt;
}