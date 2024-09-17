const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

let n = Number(input[0]);
let card = new Set(input[1].split(" ").map(Number));
let m = Number(input[2]);
let randomNumber = input[3].split(" ").map(Number);
let ans = [];

/* 시간초과!! - 애초에 배열 하나하나 검사하는 건 비효율적. 시간복잡도 문제
for (let j=0; j<randomNumber.length; j++) {
    if (card.includes(randomNumber[j]))
        ans.push(1);
    else
        ans.push(0);
}

*/

for (let i=0; i<randomNumber.length; i++) {
    if (card.has(randomNumber[i]))
        ans.push(1);
    else
        ans.push(0);
}

console.log(ans.join(" "));
