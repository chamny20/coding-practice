const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);

const visited = Array(n).fill(false);
const arr = [];

const dfs = (idx) => {
    if (idx === m) {
        console.log(arr.join(' '));
        return;
    }
    
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            
            arr.push(i+1);
            dfs(idx+1);
            arr.pop();
            
            visited[i] = false;
        }
    }
}

dfs(0);
