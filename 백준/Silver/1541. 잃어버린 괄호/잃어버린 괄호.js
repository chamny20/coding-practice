const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const line = input.shift();

const parts = line.split('-');
const sum = parts.map(part =>
    part.split('+').map(Number).reduce((acc, cur) => acc += cur, 0)
);

let ans = sum[0];
for (let i=1; i<sum.length; i++) {
    ans -= sum[i];
}
console.log(ans);