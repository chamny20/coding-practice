function solution(s) {
    let ans = 0;
    const n = s.length;
    const stack = s.split('');

    for (let i=0; i<n; i++) {
        const temp = [];
        // console.log('stack', stack);
        for (let j=0; j<n; j++) {
            // console.log(temp)
            if (temp.length) {
                if (stack[j] === ']' && temp[temp.length - 1] === '[') {
                    temp.pop();
                } else if (stack[j] === '}' && temp[temp.length - 1] === '{') {
                    temp.pop();
                } else if (stack[j] === ')' && temp[temp.length - 1] === '(') {
                    temp.pop();
                } else {
                    temp.push(stack[j]);
                }
                continue;
            }
            
            temp.push(stack[j]);
        }
        
        if (temp.length === 0) 
            ans++;
        
        stack.push(stack.shift());
    }
    
    return ans;
}
