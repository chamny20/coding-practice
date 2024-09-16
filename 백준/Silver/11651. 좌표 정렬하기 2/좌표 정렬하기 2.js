let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
let n = Number(input[0]);
let arr = [];

for(let i=1; i<=n; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    arr.push([x, y]);
}

let ans = arr.sort((a,b) => a[1]-b[1] || a[0]-b[0]);
ans.map((x) => {
    console.log(x.join(' '));
})