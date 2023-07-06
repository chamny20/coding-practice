const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim();

let inputNumber = Number(input)

let answer = 0;

for(let i = 1; i<=inputNumber; i++) {
  answer += i
}

console.log(answer);