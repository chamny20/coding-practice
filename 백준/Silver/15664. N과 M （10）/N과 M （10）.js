const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const numArr = input.shift().split(' ').map(Number);
numArr.sort((a, b) => a - b);

const arr = [];
const result = new Set();

const dfs = (idx) => {
    if (arr.length === m) {
        result.add(arr.join(' '));
        return;
    }
    
    for (let i=idx; i<n; i++) {
        arr.push(numArr[i]);
        dfs(i+1);
        arr.pop();
    }
}

dfs(0);
console.log([...result].join('\n'));

