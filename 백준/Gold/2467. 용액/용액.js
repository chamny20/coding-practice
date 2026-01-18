const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
arr.sort((a, b) => a - b);

let left = 0; // 0
let right = n-1; // 4
let min = Infinity;

const ans = [];

while (left < right) {
    const sum = arr[left] + arr[right];
    const diff = Math.abs(sum);
    
    if (min > diff) {
        min = diff;
        ans.push([arr[left], arr[right]]);
    }
    
    if (sum < 0) {
        left++;
    } else if (sum >= 0) {
        right--;
    }
}

console.log(ans[ans.length-1].join(' '));