let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let array = [];
for (let i=0; i<9; i++) {
    array.push(input[i].split(" ").map(Number));
}

let max = array[0][0];
let row = 0;
let col = 0;

for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
        if (array[i][j] > max) {
            max = array[i][j];
            row = i;
            col = j;
        }
    }
}

console.log(max);
console.log(`${row+1} ${col+1}`);