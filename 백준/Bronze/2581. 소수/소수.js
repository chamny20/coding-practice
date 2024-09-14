let [m, n] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
let arr = [];

for (let i=m; i<=n; i++) {
    let isPrime = true;
    if (i === 1) continue;
    for (let j=2; j<=Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
        arr.push(i);
}

arr.sort((a,b) => a-b);
let sum = 0;

for (let i=0; i<arr.length; i++) {
    sum += arr[i];
}
if (arr.length > 0) {
    console.log(sum);
    console.log(arr[0]);
} else {
    console.log(-1);
}

