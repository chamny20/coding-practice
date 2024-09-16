let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
let n = Number(input[0]);
let arr = [];

for (let i=1; i<=n; i++) {
    arr.push(input[i]);
}

let strArr = new Set(arr);
let ansArr = [...strArr].sort((a,b) => a.length - b.length || a.localeCompare(b));

ansArr.map((str) => console.log(str));



