const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);
let basket = [];

for (let i=1; i<=n; i++) {
    basket.push(i);
}


for (let k=1; k<=m; k++) {
    let [i, j] = input[k].split(' ').map(Number);
    let arr = [];
    for (let l=i-1; l<j; l++) {
        arr.push(basket[l]);
    }
    arr.reverse();
    basket.splice(i - 1, j - i + 1, ...arr);
}

console.log(basket.join(" "));