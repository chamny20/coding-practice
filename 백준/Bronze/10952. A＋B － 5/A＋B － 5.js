const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i=0; i<input.length; i++) {
    let a = parseInt(input[i].split(' ')[0]);
    let b = parseInt(input[i].split(' ')[1]);
    if (a+b === 0) break;
    console.log(a+b);
}