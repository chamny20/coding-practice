let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
let n = Number(input[0]);
let arr = [];

for (let i=1; i<=n; i++) {
    let age = Number(input[i].split(" ")[0]);
    let name = input[i].split(" ")[1];
    arr.push([age, name]);
}

arr.sort((a,b) => a[0]-b[0]).map((x) => console.log(x.join(' ')));