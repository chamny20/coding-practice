const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);
const arr = Array(n).fill(0);

for (let x=1; x<=m; x++) {
    let [i, j, k] = input[x].split(' ').map(Number);
    for (let y=i-1; y<j; y++) {
        arr[y] = k;
    }
}

console.log(arr.join(" "));