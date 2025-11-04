const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
const x = Number(input.shift());

arr.sort((a, b) => a - b);
// [1, 2, 3, 5, 7, 9, 10, 11, 12]

let left = 0;
let right = n-1;
let cnt = 0;
const result = [];

while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === x) {
        cnt++;
        right--;
        left++;
    } else if (sum < x) {
        left++;
    } else if (sum > x) {
        right--;
    }
}

console.log(cnt);