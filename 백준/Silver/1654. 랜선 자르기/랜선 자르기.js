const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [k, n] = input.shift().split(' ').map(Number);
const arr = input.map(n => +n).sort((a, b) => a-b);

let min = 1;
let max = Math.max(...arr);

while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let cnt = 0;
    for (let i=0; i<arr.length; i++) {
        cnt += Math.floor(arr[i] / mid);
    }
    if (cnt >= n) 
        min = mid + 1;
    else
        max = mid - 1;
}

console.log(max);
