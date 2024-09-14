let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

console.log(4*input);