const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [aCnt, bCnt] = input[0].split(" ").map(Number);

const aSet = new Set(input[1].split(" ").map(Number));
const bSet = new Set(input[2].split(" ").map(Number));
let aCount= 0;
let bCount = 0;

for (let item of bSet) {
    if (aSet.has(item))
        aCount++;
}

for (let item of aSet) {
    if (bSet.has(item))
        bCount++;
}

let ans = aSet.size - aCount + bSet.size - bCount;
console.log(ans);