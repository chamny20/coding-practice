let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
let n = Number(input[0]);
let arr = [];

for(let i=1; i<=n; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    arr.push([x, y]);
}

arr.sort((a,b) => a[0]-b[0] || a[1]-b[1]).map((x) => {
    console.log(x.join(' '));
});
