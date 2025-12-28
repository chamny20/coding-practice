const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);

const arr = [];
let result = '';

const dfs = (idx) => {
    if (arr.length === m) {
        result += arr.join(' ') + '\n';
        return;
    }
    
    for (let i=idx; i<=n; i++) {
        arr.push(i);
        dfs(i);
        arr.pop();
    }
}

dfs(1);
console.log(result);