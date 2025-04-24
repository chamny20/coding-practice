const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
const x = Number(input.shift());

arr.sort((a, b) => a - b);
let left = 0;
let right = n-1;

let cnt = 0;
while (left < right) {
    let sum = arr[left] + arr[right];
    
    if (sum === x) {
        cnt++;
        left++;
        right--;
    } else if (sum < x) {
        left++;
    } else {
        right--;
    }
}

console.log(cnt);