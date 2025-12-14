const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift()); // n <= 50
const A = input.shift().split(' ').map(Number); // 0 < A[i] <= 100
const B = input.shift().split(' ').map(Number); // 0 < B[i] <= 100

const sortedA = A.sort((a, b) => a - b);
const sortedB = B.sort((a, b) => b - a);

let sum = 0;
for (let i=0; i<n; i++) {
    sum += sortedA[i] * sortedB[i];
}
console.log(sum);