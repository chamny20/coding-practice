const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(" ").map(Number);
const arr = input.shift().split(' ').map(Number).sort((a,b) => a-b);
const visited = Array(n).fill(false);
const seq = Array(m).fill(0);

const dfs = (dep) => {
    if (dep === m) {
        console.log(seq.join(' '));
        return;
    }
    
    for (let i=0; i<arr.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            seq[dep] = arr[i];
            dfs(dep+1);
            visited[i] = false;
        }
    }
}

dfs(0);