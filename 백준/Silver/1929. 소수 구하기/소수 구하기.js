const [m, n] = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i=2; i*i<=num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

let ans = [];
for (let i=m; i<=n; i++) {
    if (isPrime(i)) ans.push(i);
}

console.log(ans.join("\n"));
