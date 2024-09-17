const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let cnt = 0;

let myStr = new Set();
for (let i=1; i<=n; i++) {
    myStr.add(input[i]);
}

for (let k=n+1; k<=m+n; k++) {
    if (myStr.has(input[k]))
        cnt++;
}
        
console.log(cnt);