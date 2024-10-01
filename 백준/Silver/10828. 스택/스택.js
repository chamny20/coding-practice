let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let stack = [];
let ans = [];

for (let i=1; i<=n; i++) {
    let cmd = input[i].split(" ")[0];
    let num = Number(input[i].split(" ")[1]);
    
    switch (cmd) {
        case 'push':
            stack.push(num);
            break;
        case 'pop':
            if (stack.length > 0) 
                ans.push(stack.pop());
            else
                ans.push(-1);
            break;
        case 'size':
            ans.push(stack.length);
            break;
        case 'empty':
            if (stack.length)
                ans.push(0);
            else
                ans.push(1);
            break;
        case 'top':
            if (stack.length)
                ans.push(stack[stack.length-1]);
            else
                ans.push(-1);
            break;
    }
}

console.log(ans.join("\n"));