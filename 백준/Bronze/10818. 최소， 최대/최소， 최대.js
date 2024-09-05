const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const cnt = input[0];
const arr = input[1].split(" ");

arr.sort((a,b) => a-b);

console.log(`${arr[0]} ${arr[cnt-1]}`)