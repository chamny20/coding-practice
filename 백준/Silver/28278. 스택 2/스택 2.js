const [n, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let stack = [];
let ans = [];

for (let i=0; i<arr.length; i++) {
    let query = arr[i];
    let [num, val] = query.split(' ').map(Number);
    switch (num) {
        case 1: 
            stack.push(val);
            break;
        case 2: 
            if (stack.length) ans.push(stack.pop());
            else ans.push(-1);
            break;
        case 3: 
            ans.push(stack.length);
            break;
        case 4:
            if (stack.length) ans.push(0);
            else ans.push(1);
            break;
        case 5: 
            if (stack.length)
                ans.push(stack[stack.length-1]);
            else ans.push(-1);
            break;
            
    }
}

console.log(ans.join('\n'));