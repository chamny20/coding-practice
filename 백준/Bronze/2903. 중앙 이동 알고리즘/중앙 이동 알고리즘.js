let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let aSide = 2**(Number(input)) + 1;

console.log(aSide*aSide);
