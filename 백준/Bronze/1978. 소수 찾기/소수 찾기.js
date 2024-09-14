const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

let cnt = parseInt(input[0]);
let arr = input[1].split(' ').map(Number);
let ans = 0;
for (let i=0; i<cnt; i++) {
    if (arr[i] === 1) continue;
    else {
       let count = 0;
       for (let j=2; j<arr[i]; j++) {
           if (arr[i] % j === 0)
               count++;
       }
       if (count === 0) ans++;
    }
}

console.log(ans);
