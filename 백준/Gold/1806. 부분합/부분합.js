const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, s] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

// n개
// 연속된 수들 중 부분합이 s이상이 되도록
let left = 0;
let right = 0;
let sum = arr[0];

let ans = Infinity;


while (right < n) {

    if (sum < s) {
        right++;
        sum += arr[right];
    } else {
        const cnt = right - left + 1;

        ans = Math.min(ans, cnt);
        sum -= arr[left];
        left++;
    }
        
}



console.log(ans === Infinity ? 0 : ans);