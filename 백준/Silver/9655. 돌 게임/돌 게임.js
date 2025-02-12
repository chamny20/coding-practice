const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());

n % 2 === 0 ? console.log('CY') : console.log('SK');