const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let stack = Array.from({ length: n }, (_, i) => i+1);

let ans = [];
let idx = 0;

while (stack.length > 0) {
    idx = (idx + k - 1) % stack.length;
    ans.push(...stack.splice(idx, 1));
}

console.log('<' + ans.join(", ") + '>');