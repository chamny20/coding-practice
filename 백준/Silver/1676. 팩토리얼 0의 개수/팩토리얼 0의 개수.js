const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());

const factorial = (n) => {
    return n ? BigInt((BigInt(n) * BigInt(factorial(n-1)))) : 1;
}

const arr = [...factorial(n).toString()];
let cnt = 0;

while (true) {
    const cur = arr.pop();
    if (cur === '0') {
        cnt++;
    } else {
        break;
    }
}

console.log(cnt);