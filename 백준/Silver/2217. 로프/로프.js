const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const arr = input.map(line => line.split(' ').map(Number));

arr.sort((a, b) => a - b);
let max = -Infinity;

for (let i=0; i<n; i++) {
    const val = arr[i] * (n-i);
    max = Math.max(max, val);
}

console.log(max);
