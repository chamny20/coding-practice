const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b] = input.shift().split(' ').map(Number);

const arr = [];
for (let i=1; i<=b; i++) {
    for (let j=1; j<=i; j++) {
        arr.push(i);
    }
}

const ans = arr.slice(a-1, b).reduce((sum, num) => sum += num);
console.log(ans);