function solution(order) {
    let n = order.length;
    let stack = [];
    let idx = 0;
    
    for (let i=1; i<=order.length; i++) {
        stack.push(i);
        
        while (stack.length > 0 && stack.at(-1) === order[idx]) {
            stack.pop();
            idx++;
        }
    }

    return idx;
}
