const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [m, n] = input.shift().split(' ').map(Number);
const maps = input.map(line => line.split(' ').map(Number));
const visited = Array.from(Array(m), () => Array(n).fill(false));
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

const bfs = (start) => {
    const queue = [start];
    visited[start[0]][start[1]] = true;
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<m && ny<n && !visited[nx][ny] && maps[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
}

let cnt = 0;
for (let i=0; i<m; i++) {
    for (let j=0; j<n; j++) {
        if (!visited[i][j] && maps[i][j]) {
            bfs([i, j]);
            cnt++;
        }
    }
}

console.log(cnt);