let arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
arr = arr.sort((a,b) => b-a);
console.log(arr.join(''));