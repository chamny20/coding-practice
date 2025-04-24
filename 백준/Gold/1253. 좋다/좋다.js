const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
arr.sort((a, b) => a - b);

let cnt = 0;

for (let i=0; i<n; i++) {
    const target = arr[i];
    let left = 0;
    let right = n - 1;
    
    while (left < right) {
        if (left === i) {
            left++;
            continue;
        }
        if (right === i) {
            right--;
            continue;
        }
        const sum = arr[left] + arr[right];
        
        if (sum === target) {
            cnt++;
            break;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
}
console.log(cnt);
