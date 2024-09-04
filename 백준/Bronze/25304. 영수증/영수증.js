const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const total = parseInt(input[0]);
const cnt = parseInt(input[1]);

let sum = 0;

for (let i=0; i<cnt; i++) {
    let temp = input[i+2];
    let line = temp.split(" ");
    sum += line[0] * line[1];
}

total === sum ? console.log('Yes') : console.log('No');