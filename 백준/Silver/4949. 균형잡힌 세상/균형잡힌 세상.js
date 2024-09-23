const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let ans = [];
let open = ["(", "["];
let closed = [")", "]"];

input.slice(0, input.length-1).forEach(str => {
    let isValid = false;
    let stack = [];
    
    for (let i = 0; i < str.length; i++) {
        if (open.includes(str[i]))
            stack.push(str[i]);
        else if (closed.includes(str[i])) {
            if (stack.pop() !== open[closed.indexOf(str[i])]) {
                isValid = true;
                ans.push("no");
                break;
            }
        }
    }
    
    if (!isValid) {
        if (stack.length === 0) 
            ans.push('yes');
        else
            ans.push('no');
    }
});


console.log(ans.join("\n"));
