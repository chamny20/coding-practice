const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const s = input.shift().split('').map(Number);

let cnt = 0;

for (let i=0; i<s.length-1; i++) {
    if (s[i] !== s[i+1]) cnt++;
}
console.log(Math.ceil(cnt / 2));