let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
let cnt = parseInt(input[0]);
let xArr = [];
let yArr = [];

for (let i=1; i<=cnt; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    xArr.push(a);
    yArr.push(b);
}

xArr.sort((a,b) => a-b);
yArr.sort((a,b) => a-b);

let w = xArr[xArr.length-1] - xArr[0];
let h = yArr[yArr.length-1] - yArr[0];

console.log(w*h);
