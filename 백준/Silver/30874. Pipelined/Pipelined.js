const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number).sort((a, b) => b - a);

console.log(n - 1 + arr[0]);