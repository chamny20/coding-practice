const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);

arr.sort((a, b) => a - b);

const sumArr = arr.reduce((acc, cur, idx) => {
    acc.push((acc.at(-1) ?? 0) + cur);
    return acc;
},[]);

const ans = sumArr.reduce((acc, cur) => acc + cur, 0);

console.log(ans);