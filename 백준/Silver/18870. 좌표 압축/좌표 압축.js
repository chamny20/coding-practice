let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let sortedArr = [...new Set(arr)].sort((a,b) => a-b);

let coordMap = new Map();
sortedArr.forEach((value, idx) => {
    coordMap.set(value, idx);
})


let ans = arr.map((num) => coordMap.get(num));
console.log(ans.join(' '));


