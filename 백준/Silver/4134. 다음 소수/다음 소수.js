const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = Number(input[0]);
let ans = [];

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i=2; i*i<=num; i++) {
            if (num % i === 0) return false;
    }
    return true;
}

for (let i=1; i<=cnt; i++) {
    let num = Number(input[i]);
    while (!isPrime(num)) {
       num++;
    }
    ans.push(num);
}

console.log(ans.join("\n"));

