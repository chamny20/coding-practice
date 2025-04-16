const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let n = Number(input.shift());

if (Math.log2(n) === parseInt(Math.log2(n))) {
    console.log(1);
    return;
}

let ans = 0;
while (n > 1) {
    if (n % 2 !== 0) {
        ans++;
    }
    n = Math.floor(n / 2);
}

console.log(ans + 1);
