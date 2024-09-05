const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let arr = [];

for (let i=0; i<input.length; i++) {
    arr.push(parseInt(input[i]) % 42);
}

let ans = arr.filter((el, idx) => arr.indexOf(el) === idx);
console.log(ans.length);


