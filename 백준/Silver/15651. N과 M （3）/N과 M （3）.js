const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);

let result = '';
const arr = [];

const dfs = (dep) => {
    if (dep === m) {
        result += arr.join(' ') + '\n';
        return;
    }
    
    for (let i=0; i<n; i++) {
        arr.push(i+1);
        dfs(dep+1);
        arr.pop();
    }
    
}

dfs(0);
console.log(result);

