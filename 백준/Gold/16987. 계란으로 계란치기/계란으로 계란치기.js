const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const arr = [];

for (let i=0; i<n; i++) {
    const [s, w] = input[i].split(' ').map(Number);
    arr.push([s, w]);
}

let max = -Infinity;

const dfs = (idx) => {
    if (idx === n) {
        let cnt = 0;
        for (let i=0; i<n; i++) {
            if (arr[i][0] <= 0) cnt++;
        }
        max = Math.max(max, cnt);
        return;
    }
    
    if (arr[idx][0]<=0) { 
        // 이미 깨졌으면
        dfs(idx+1);
        return;
    }
    
    let status = false;
    for (let i=0; i<n; i++) {
        if (idx === i) continue;
        if (arr[i][0] <= 0) continue;
        
        status = true;
        arr[idx][0] -= arr[i][1];
        arr[i][0] -= arr[idx][1];
        
        dfs(idx+1);
        
        arr[idx][0] += arr[i][1];
        arr[i][0] += arr[idx][1];
        
    }
    
    if (!status) {
        dfs(idx +1);
        return;
    }
}


dfs(0);
console.log(max);
