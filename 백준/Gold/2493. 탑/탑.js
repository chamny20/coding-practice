const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
const stack = [];
const result = Array(n).fill(0);

for (let i=0; i<n; i++) {
    const tower = arr[i];
    
    while (stack.length > 0 && stack.at(-1)[0] < tower) {
        stack.pop();
    }
    if (stack.length > 0) {
        result[i] = stack.at(-1)[1] + 1;
    } 
    stack.push([tower, i]);
}

console.log(result.join(" "));