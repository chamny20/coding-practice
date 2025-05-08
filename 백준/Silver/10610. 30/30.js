const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = (input[0]);

const arr = n.split('').map(Number);
arr.sort((a, b) => b - a);

const sum = arr.reduce((sum, num) => sum += num);

console.log(sum % 3 === 0 && arr[arr.length-1] === 0 ? arr.join('') : -1);
