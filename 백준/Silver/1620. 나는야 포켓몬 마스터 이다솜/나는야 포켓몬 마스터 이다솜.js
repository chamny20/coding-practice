const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let namesMap = new Map();
let ans = [];

for (let i=1; i<=n; i++) {
    namesMap.set(input[i], i);
}

for (let k=n+1; k<input.length; k++) {
    if(!isNaN(Number(input[k]))) {
        ans.push((input[Number(input[k])]));
    } else {
        let name = namesMap.get(input[k]);
        ans.push(name);
    }
    
}

console.log(ans.join("\n"));
