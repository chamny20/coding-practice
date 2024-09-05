const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [cnt, num] = input[0].split(" ");
const arr = input[1].split(" ");
let ans = '';

for (let i=0; i<cnt; i++) {
    if (num > parseInt(arr[i])) {
        ans += arr[i] + ' ';
    }
}

console.log(ans);
