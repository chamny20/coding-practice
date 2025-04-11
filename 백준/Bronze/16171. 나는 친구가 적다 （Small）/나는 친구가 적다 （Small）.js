const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const K = input[1];

const str = S.split('').filter(s => isNaN(s)).join('');
if (str.includes(K)) 
    console.log(1);
else
    console.log(0);