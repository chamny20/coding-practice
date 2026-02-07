const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = input.shift().split('').map(Number); // 방번호

const map = new Map();
for (let i=0; i<=9; i++) {
    map.set(i, 0);
}

for (let i=0; i<arr.length; i++) {
    const s = arr[i];
    const val = map.get(s);
    map.set(s, val+1);
}

let max = -Infinity;
const filteredCounting = Math.ceil((map.get(6) + map.get(9)) / 2);
max = Math.max(max, filteredCounting);

for (let i=0; i<=9; i++) {
    if (i === 6 || i === 9) continue;
    max = Math.max(max, map.get(i));
}
console.log(max);