const [n, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let stack = [];

for (let i=0; i<n; i++) {
    let num = arr[i];
    if (num === 0)
        stack.pop();
    else
        stack.push(num);
}
let ans = 0;
stack.map((x) => {
    ans += x;
})

console.log(ans);