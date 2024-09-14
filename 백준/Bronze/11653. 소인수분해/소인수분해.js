let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

let arr = [];
let divisor = 2;

while (input >= 2) {
    if (input % divisor === 0) {
        arr.push(divisor);
        input /= divisor;
    } else {
        divisor++;
    }
}

for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}