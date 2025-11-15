const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const k = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
const distances = [];

arr.sort((a, b) => a - b);

for (let i=1; i<n; i++) {
    const diff = arr[i] - arr[i-1];
    distances.push(diff);
}

distances.sort((a, b) => b - a);

let ans = 0;
for (let i=k-1; i<n-1; i++) {
    ans += distances[i];
}

console.log(ans);
