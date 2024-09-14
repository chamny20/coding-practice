let [x, y, w, h] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let arr = [];
arr.push(h-y, x, y, w-x);
arr.sort((a,b) => a-b);
console.log(arr[0]);