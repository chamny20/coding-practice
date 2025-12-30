const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = [];

for (let i=0; i<5; i++) {
    const line = input.shift().split('');
    arr.push(line);
}

const dirs = [[1, 0], [0, 1], [0, -1], [-1, 0]];

const maps = Array.from(Array(5), (idx) => idx);

const dfs = (dep, start, sCnt, res) => {
    if (dep === 7) {
        if (sCnt < 4) return;
        // bfs call        
        bfs(res);
        return;
    }
    
    if (dep - sCnt >= 4) return; // Y가 4개 이상이면
    
    for (let i=start; i<25; i++) {
        const col = i % 5;
        const row = Math.floor(i / 5);
        sCnt += arr[row][col] === 'S' ? 1 : 0;
        res.push(i);
        dfs(dep+1, i+1, sCnt, res);
        res.pop();
        sCnt -= arr[row][col] === 'S' ? 1 : 0;
    }
}

let ans = 0;

const bfs = (numArr) => {
    const num = numArr[0];
    const r = Math.floor(num / 5);
    const c = num % 5;
    
    const queue = [[r, c]];
    const visited = Array.from(Array(5), () => Array(5).fill(false));
    visited[r][c] = true;
    let cnt = 1;
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        
        
        for (let i=0; i<dirs.length; i++) {
            const nx = curX + dirs[i][0];
            const ny = curY + dirs[i][1];
            const temp = nx * 5 + ny;
            
            if (nx>=0 && ny>=0 && nx<5 && ny<5 && !visited[nx][ny] && numArr.includes(temp)) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                cnt++;
            }
        }
    }
    
    if (cnt === 7) {
        ans++;
        return;
    }
                   
}

dfs(0, 0, 0, []);
console.log(ans);
