function solution(x, y, n) {
    let ans = 0;
    let queue = [[y, 0]];
    
    while (queue.length) {
        const [num, cnt] = queue.shift();
        
        if (num === x) 
            return cnt;
        
        if (num % 2 === 0 && num / 2 >= x)
            queue.push([num/2, cnt+1]);
        if (num % 3 === 0 && num / 3 >= x)
            queue.push([num/3, cnt+1]);
        if (num - n >= x) 
            queue.push([num - n, cnt+1]);
    }
    
    
    return -1;
}