const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const maps = input.map(line => line.split('').map(Number));
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const bfs = (start, visited) => {
    const [x, y] = start;
    visited[x][y] = true;
    const queue = [[x, y]];
    let dis = 1;
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dirs.length; i++) {
            const nx = curX + dirs[i][0];
            const ny = curY + dirs[i][1];
            if (nx>=0 && ny>=0 && nx<n && ny<n && !visited[nx][ny] && maps[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                dis++;
            }
        }
        
    }
    
    return dis;
}

const res = [];
const visited = Array.from(Array(n), () => Array(n).fill(false));

for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (!visited[i][j] && maps[i][j]) {
            const dis = bfs([i, j], visited);
            res.push(dis);
        }
    }
}

console.log(res.length);
console.log(res.sort((a, b) => a - b).join('\n'));