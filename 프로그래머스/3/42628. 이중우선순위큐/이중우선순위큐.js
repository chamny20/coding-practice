function solution(operations) {
    const stack = [];
    
    for (const operation of operations) {
        const [cmd, _num] = operation.split(' ');
        const num = Number(_num);
        
        if (cmd === 'I') {
            stack.push(num);
        } else {
            if (num === -1) { // 최솟값 삭제
                const min = Math.min(...stack);
                stack.splice(stack.indexOf(min), 1);
            } else { // 최댓값 삭제
                const max = Math.max(...stack);
                stack.splice(stack.indexOf(max), 1);
            }
        }
    }
    
    stack.sort((a, b) => a - b);
    return stack.length > 0 ? [stack[stack.length - 1], stack[0]] : [0, 0];
    
}