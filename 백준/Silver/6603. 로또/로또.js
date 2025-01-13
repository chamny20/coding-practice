const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const results = [];

const dfs = (idx, list, n, arr) => {
    if (list.length === 6) {
        results.push(list.join(' '));
        return;
    }
    
    for (let i=idx; i<n; i++) {
        dfs(i+1, [...list, arr[i]], n, arr);
    }
}

for (let i=0; i<input.length; i++) {
    if (input[i] === '0') break;
    
    const arr = input[i].split(' ').map(Number);
    const n = arr.shift();
    results.push('');
    dfs(0, [], n, arr);
}

console.log(results.slice(1).join('\n'));