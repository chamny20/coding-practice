const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [h, w, n, m] = input.shift().split(' ').map(Number);

let a = Math.ceil(h / (n + 1));
let b = Math.ceil(w / (m + 1));
let cnt = a * b;

console.log(cnt);

