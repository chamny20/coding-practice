const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input.shift());
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
let result = [];

const dfs = (x, y, m, n, maps, visited) => {
    visited[x][y] = true;
    
    for (let i=0; i<dir.length; i++) {
        const nx = x + dir[i][0];
        const ny = y + dir[i][1];
        
        if (nx>=0 && ny>=0 && nx<m && ny<n) {
            if (maps[nx][ny] === 1 && !visited[nx][ny]) {
                dfs(nx, ny, m, n, maps, visited);
            }
        }
    }
}

for (let i=0; i<t; i++) {
    const [m, n, k] = input.shift().split(" ").map(Number);  
    let maps = Array.from(Array(m), () => Array(n).fill(0));
    let cnt = 0;
    let visited = Array.from(Array(m), () => Array(n).fill(false));
    
    for (let j=0; j<k; j++) {
        const [x, y] = input.shift().split(" ").map(Number);
        maps[x][y] = 1;
    }
    
    for (let x=0; x<m; x++) {
        for (let y=0; y<n; y++) {
            if (maps[x][y] === 1 && !visited[x][y]) {
                dfs(x, y, m, n, maps, visited);
                cnt++;
            }
        }
    }
    
    result.push(cnt);
}

console.log(result.join("\n"));
