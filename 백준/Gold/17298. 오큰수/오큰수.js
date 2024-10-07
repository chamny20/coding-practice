let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

let stack = [];
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let ans = new Array(n).fill(-1);

for (let i=0; i<n; i++) {
    while(stack.length && arr[stack[stack.length - 1]] < arr[i]) {
        ans[stack.pop()] = arr[i];
    } 
    stack.push(i);
}

console.log(ans.join(" "));