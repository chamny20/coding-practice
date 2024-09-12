let [a, b] = require('fs').readFileSync("/dev/stdin").toString().split(' ').map(Number);
let arr = [];

for (let i=1; i<=a; i++) {
    let ans = a / i;
    let rest = a % i;
    
    if (!rest)
        arr.push(ans);
}

arr.sort((a,b) => a - b);
if (arr.length >= b) {
    console.log(arr[b-1]);
} else
    console.log(0);