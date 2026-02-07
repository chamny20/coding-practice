const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let docs = input.shift();
const keyword = input.shift();

// 최대 몇 번 등장하는지
let cnt = 0;

// edge case
// abababa
// ababa

while (docs.includes(keyword)) {
    docs = docs.replace(keyword, '.');
    cnt++;
}

console.log(cnt);