const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const cnt = Number(input[0]);

for (let i=1; i<=cnt; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);    
    console.log(lcm(a, b));
}