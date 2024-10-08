const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let [c, d] = input[1].split(" ").map(Number);

if (b % a === 0)
    [a, b] = [1, b/a];
if (d & c === 0)
    [c, d] = [a, d/c];

let A = a * d + b * c;
let B = b * d;

const gcd = (x, y) => {
  if (y == 0) return x;
  else return gcd(y, x % y);
};

let divisor = gcd(A, B);

console.log(`${A / divisor} ${B / divisor}`);