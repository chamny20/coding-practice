const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input[0]);
let arr = [];

for (let i=1; i<=n; i++) {
    arr.push(Number(input[i]));
}

let diffArr = [];

for (let i=0; i<n-1; i++) {
    let diff = arr[i+1] - arr[i];
    diffArr.push(diff);
}

const gcd = (x, y) => {
    if (y === 0) return x;
    else return gcd(y, x % y);
}

let gcdVal = diffArr[0];
for (let i = 1; i < diffArr.length; i++) {
    gcdVal = gcd(gcdVal, diffArr[i]);
}

let treeCnt = 0;
for (let i=0; i<diffArr.length; i++) {
    treeCnt += diffArr[i] / gcdVal - 1;
}

console.log(treeCnt);
