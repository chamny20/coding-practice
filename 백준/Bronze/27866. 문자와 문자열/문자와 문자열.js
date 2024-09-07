const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
// test
let str = input[0].toString();
let num = parseInt(input[1]);

console.log(str[num-1]);