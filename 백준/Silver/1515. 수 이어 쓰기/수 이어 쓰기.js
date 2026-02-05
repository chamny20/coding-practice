const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = input[0];

let idx = 0;
let prev = 1;

while (idx < arr.length) {    
    for (const s of String(prev)) {
        if (s === arr[idx]) idx++;
    }
    prev++;
    
}

console.log(prev-1);