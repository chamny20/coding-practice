let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let arr = [];
for (let i=1; i<=n; i++) {
    arr.push(Number(input[i]));
}

let ans = arr.sort((a,b) => a-b);
console.log(ans.join("\n"));