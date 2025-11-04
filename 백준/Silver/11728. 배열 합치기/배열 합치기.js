const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);

const arr1 = input.shift().split(' ').map(Number);
const arr2 = input.shift().split(' ').map(Number);

let s = 0;
let e = 0;
const result = [];

while (s < n && e < m) {
    if (arr1[s] <= arr2[e]) {
        result.push(arr1[s]);
        s++;
    } else {
        result.push(arr2[e]);
        e++;
    }
}

while (s < n) result.push(arr1[s++]);
while (e < m) result.push(arr2[e++]);

console.log(result.join(' '));