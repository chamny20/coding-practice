const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());

const result = [];

for (let i=0; i<n; i++) {
    result.push(Number(input[i]));
}

result.sort((a, b) => a - b);
console.log(result.join('\n'));