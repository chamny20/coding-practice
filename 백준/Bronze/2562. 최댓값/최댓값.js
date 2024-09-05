let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n').map(x => Number(x));

let max = input[0];
let idx = 0;

for (let i=0; i<9; i++) {
    if (max < input[i]) {
        max = input[i];
        idx = i;
    }
       
}

console.log(max);
console.log(idx+1);
