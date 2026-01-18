const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.map(Number);

arr.sort((a, b) => a - b);

let left = 0;
let right = 0; // 같은 수일 수도 있다!!!!!
let ans = Infinity;

while (right < n) {
    const diff = Math.abs(arr[left] - arr[right]);
    
    if (diff === m) {
        console.log(m);
        return;
    }
    
    if (diff < m) {
        right++;
    } else if (diff > m) {
        ans = Math.min(ans, diff);
        left++;
    }
}

console.log(ans);