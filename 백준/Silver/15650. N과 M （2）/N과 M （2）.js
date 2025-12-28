const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);

const arr = [];

const dfs = (start) => {
    if (arr.length === m) {
        console.log(arr.join(' '));
        return;
    }
    
    for (let i=start; i<=n; i++) {
        arr.push(i);
        dfs(i+1);
        arr.pop();
    }
}

dfs(1);