const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, k] = input.shift().split(' ').map(Number);
const arr = input.map(Number).filter(num => num <= k);

arr.sort((a, b) => b - a);

let ans = 0;
let remain = k;
for (let i=0; i<arr.length; i++) {
    ans += Math.floor(remain / arr[i]);
    remain = remain % arr[i];
    if (remain === 0) 
        break;
}
console.log(ans);