let [a, b, c, d, e] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let avg = (a+b+c+d+e) / 5;
let arr = [a, b, c, d, e].sort((a,b)=> a-b);

console.log(avg);
console.log(arr[2]);
