const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const m = Number(input.shift());

const nums = Array.from(Array(10), (_, idx) => idx);
const arr = m > 0 ?input.shift().split(' ').map(Number) : [];
const filtered = nums.filter(l => !arr.includes(l));
const len = String(n).length;

let ans = Math.abs(n - 100); // +, -만 사용하는 경우

for (let i=0; i<1000000; i++) {
    const str = String(i);
    let isValid = true;
    
    for (const s of str) {
        if (!filtered.includes(Number(s))) {
            isValid = false;
            break;
        }
    }
    if (isValid) {
        const other = Math.abs(n-i) + str.length;
        ans = Math.min(ans, other);
    }
}
console.log(ans);