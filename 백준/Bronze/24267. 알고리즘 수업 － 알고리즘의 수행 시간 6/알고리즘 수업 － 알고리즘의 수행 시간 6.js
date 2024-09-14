const n = require('fs').readFileSync("/dev/stdin").toString().trim();
let ans = (BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6);
console.log(String(ans));
console.log(3);
