const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, s] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

// 연속된 수들 부분합 중에 그 합이 s 이상이 되는 것 중 가장 짧은 길이 구하기
let min = Infinity;

let left = 0;
let right = 0;
let sum = 0;

while (right <= n) {
    if (sum >= s) {
        min = Math.min(min, right - left);
        sum -= arr[left++];
    } else {
        sum += arr[right++];
    }
    
}

let ans = min === Infinity ? 0 : min;
console.log(ans);