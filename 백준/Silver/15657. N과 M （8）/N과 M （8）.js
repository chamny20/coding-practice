const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const numArr = input.shift().split(' ').map(Number);
numArr.sort((a, b) => a - b);

let result = '';
const arr = [];

const dfs = (start) => {
    if (arr.length === m) {
        result += arr.join(" ") + '\n';
        return;
    }
    
    for (let i=start; i<n; i++) {
        arr.push(numArr[i]);
        dfs(i);
        arr.pop();
    }
}


dfs(0);
console.log(result);
