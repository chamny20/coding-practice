let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = parseInt(input[0]);
let arr = [];

for (let i=1; i<=n; i++) {
    arr.push(Number(input[i]));
}

arr.sort((a,b) => a-b).map((x) => {
    console.log(x);
})
