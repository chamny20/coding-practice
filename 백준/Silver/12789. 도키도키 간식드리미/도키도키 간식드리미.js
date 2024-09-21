const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let stack = [];
let idx = 1;

for (let i=0; i<arr.length; i++) {
    if (arr[i] === idx) {
        idx++;
    } else {
        stack.push(arr[i]);
    }
    
    while (stack.length > 0 && stack[stack.length - 1] === idx) {
        stack.pop();
        idx++;
    }
}

if (stack.length === 0)
    console.log("Nice");
else
    console.log("Sad");

