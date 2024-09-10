let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let cnt = parseInt(input[0]);

for (let i=1; i<=cnt; i++) {
    let coins = [25, 10, 5, 1];
    let num = parseInt(input[i]);
    let needs = [0, 0, 0, 0];
    for (let i=0; i<coins.length; i++) {
        needs[i] += Math.floor(num / coins[i]);
        num = num % coins[i];
    }
    console.log(needs.join(' '));
}


