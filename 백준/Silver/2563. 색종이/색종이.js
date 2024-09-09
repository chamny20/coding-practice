let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = Number(input[0]);
const arr = Array.from(Array(100), () => Array(100).fill(0));
let sum = 0;

for (let i=1; i<=cnt; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    for (let row=a; row<a+10; row++) {
        for (let col=b; col<b+10; col++) {
            if (arr[row][col]>=1) continue; 
            arr[row][col] += 1;
            sum++;
        }
    }
}
console.log(sum);