const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);
let baskets = Array(n).fill().map((_, i) => i + 1);

for (let k=1; k<=m; k++) {
    const [i, j] = input[k].split(' ').map(Number);
    let tmp = baskets[i-1];
    baskets[i-1] = baskets[j-1];
    baskets[j-1] = tmp;
}

console.log(baskets.join(' '));