const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const cnt = input[0];
const arr = input[1].split(" ");
const v = input[2];

let ans = 0;

for (let i=0; i<cnt; i++) {
    if(v === arr[i]) ans++;
}

console.log(ans);
