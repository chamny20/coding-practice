const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

let [a1, a0] = input[0].split(" ").map(Number);
let c = Number(input[1]);
let n = Number(input[2]);

let f_n = a1 * n + a0;
let c_gn = c * n;

if (f_n <= c_gn && a1 <= c) console.log(1);
else console.log(0);