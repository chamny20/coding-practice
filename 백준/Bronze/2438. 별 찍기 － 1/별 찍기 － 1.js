const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0]);
let str = '';

for (let i=1; i<=num; i++) {
    str += '*';
    console.log(str);
}