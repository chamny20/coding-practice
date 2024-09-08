const input = require('fs').readFileSync("/dev/stdin").toString().split(' ');
let realArr = [1, 1, 2, 2, 2, 8];
let ans = [];

for (let i=0; i<input.length; i++) {
    ans.push(realArr[i] - input[i]);
}

console.log(ans.join(' '));