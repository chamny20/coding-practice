let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a = input[0];     // 아침에 이동하는 수 
const b = input[1];     // 밤에 미끄러지는 수
const v = input[2];     // 높이

console.log(Math.ceil((v - b) / (a - b)));