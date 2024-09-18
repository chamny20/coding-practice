const [a, b] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);    
console.log(lcm(a, b));
