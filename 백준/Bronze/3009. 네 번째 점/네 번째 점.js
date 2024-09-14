let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
let left = {};
let right = {};

for (let i=0; i<input.length; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    if (left[a]) 
        left[a] += 1;
    else
        left[a] = 1;
    if (right[b])
        right[b] += 1;
    else
        right[b] = 1;
}

let ansLeft = Object.keys(left).filter(key => left[key] === 1);
let ansRight = Object.keys(right).filter(key => right[key] === 1);

console.log(`${ansLeft[0]} ${ansRight[0]}`);
