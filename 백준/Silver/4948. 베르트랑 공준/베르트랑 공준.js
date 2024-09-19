const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let arr = [];
for (let i=0; i<input.length-1; i++) {
    arr.push(input[i]);
}

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i=2; i*i<=num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i=0; i<arr.length; i++) {
    let [a, b] = [arr[i], arr[i]*2];
    let cnt = 0;
    for (let i=a+1; i<=b; i++) {
        if (isPrime(i)) cnt++;
    }
    console.log(cnt);
}
