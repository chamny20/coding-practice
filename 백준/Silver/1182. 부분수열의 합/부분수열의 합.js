const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

let cnt = 0;

const func = (idx, total) => {
    if (idx === n) {
        if (total === s) {
            cnt++;
            return;
        }
    } else {
        func(idx + 1, total);
        func(idx + 1, total + arr[idx]);
    }
    
}

func(0, 0);
if (s===0) cnt--;
console.log(cnt);