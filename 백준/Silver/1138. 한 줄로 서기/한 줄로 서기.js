const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
// n <= 10

const arr = input.shift().split(' ').map(Number);
const ans = [];

for (let i=n; i>=1; i--) { // 키큰애들부터 
    const cnt = arr[i-1];
    if (i === n) {
        ans.push(i);
        continue;
    }
    ans.splice(cnt, 0, i);
}

console.log(ans.join(' '));