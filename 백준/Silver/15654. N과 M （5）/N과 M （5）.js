const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const numArr = input.shift().split(' ').map(Number);

numArr.sort((a, b) => a - b);

let result = '';
const arr = [];
const visited = Array(n).fill(false);

const dfs = (dep) => {
    if (dep === m) {
        result += arr.join(' ') + '\n';
        return;
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            
            arr.push(numArr[i]);
            dfs(dep+1);
            arr.pop();
            
            visited[i] = false;
        }
    }
}

dfs(0);
console.log(result);