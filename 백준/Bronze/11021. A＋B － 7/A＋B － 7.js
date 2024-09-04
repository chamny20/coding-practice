const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0]);
let plAns = '';

for (let i=1; i<=num; i++) {
    let ans = input[i].split(' ');
    plAns += `Case #${i}: ${parseInt(ans[0]) + parseInt(ans[1])}\n` ; 
}

console.log(plAns);