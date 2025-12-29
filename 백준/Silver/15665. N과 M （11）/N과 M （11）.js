const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const numArr = input.shift().split(' ').map(Number);
numArr.sort((a, b) => a - b);
const arr = [];
const res = new Set();

const dfs = (dep) => {
    if (arr.length === m) {
        res.add(arr.join(' '));
        return;
    }
    
    for (let i=0; i<n; i++) {
        arr.push(numArr[i]);
        dfs(i+1);
        arr.pop();
    }
}

dfs(0);
console.log([...res].join('\n'));