const [n, k] = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let arr = Array.from({ length: n }, (_, i) => i + 1);

let ans = [];
let idx = 0;
while (arr.length) {
    idx = (idx + k - 1) % arr.length;
    ans.push(...arr.splice(idx, 1));
}

console.log("<" + ans.join(", ") + ">");
