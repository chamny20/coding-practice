let [n, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

console.log(n.toString(b).toUpperCase());