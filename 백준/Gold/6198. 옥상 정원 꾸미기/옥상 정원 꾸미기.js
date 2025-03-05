const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const arr = input.map(Number);
let sum = 0;

const stack = [];
for (let i=0; i<arr.length; i++) {
    const building = arr[i];
    while (stack.length > 0 && stack[stack.length - 1] <= building) {
        stack.pop();
    }
    
    sum += stack.length;
    stack.push(building);
}

console.log(sum);