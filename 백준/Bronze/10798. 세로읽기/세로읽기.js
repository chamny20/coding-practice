let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let len = input.map((el) => el.length);
let maxLen = Math.max(...len);
let ans = '';

for (let i=0; i<maxLen; i++) {
    for (let j=0; j<input.length; j++) {
        if (input[j][i] === undefined) continue;
        else
            ans += input[j][i];
    }
}

console.log(ans);