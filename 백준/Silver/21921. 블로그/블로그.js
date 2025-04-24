const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, x] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

for (let i=1; i<n; i++) {
    arr[i] += arr[i-1];
}

const result = [arr[x-1]];

for (let i=x; i<n; i++) {
    let sum = arr[i] - arr[i-x];
    result.push(sum);
}

let max = Math.max(...result);
const cnt = result.filter(el => el === max).length;

if (max === 0) {
    console.log("SAD");
} else {
    console.log(max);
    console.log(cnt);
}
