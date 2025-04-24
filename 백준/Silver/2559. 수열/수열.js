const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, k] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

let sum = 0;
for (let i=0; i<k; i++) {
    sum += arr[i];
}

let max = sum;

for (let i=k; i<n; i++) {
    sum = sum - arr[i-k] + arr[i];
    
    if (sum > max) {
        max = sum;
    } 
}

console.log(max);