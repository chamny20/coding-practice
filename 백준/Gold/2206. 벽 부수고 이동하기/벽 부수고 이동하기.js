const input = require('fs').readFileSync("/dev/stdin", 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const maps = input.map(line => line.split('').map(Number));
const visited = Array.from(Array(n), () => new Array());
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

// 벽 부수기 여부
for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
        visited[i][j] = new Array(2).fill(0);
    }
}

const bfs = (start) => {
    const [x, y] = start;
    const queue = [[x, y, 0]];
    visited[x][y][0] = 1;
    let cnt = 0;
    let idx = 0;
    
    while (idx !== queue.length) {
        const [curX, curY, isBroken] = queue[idx];
        
        if (curX === n-1 && curY === m-1) 
            return visited[n-1][m-1][isBroken];
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<n && ny<m) {
                if (maps[nx][ny]===0 && visited[nx][ny][isBroken]===0) {
                    visited[nx][ny][isBroken] = visited[curX][curY][isBroken] + 1;
                    queue.push([nx, ny, isBroken]);
                } else if (maps[nx][ny] && isBroken===0) {
                    visited[nx][ny][isBroken+1] = visited[curX][curY][isBroken] + 1;
                    queue.push([nx, ny, isBroken + 1]);
                }
            }
        }
        idx++;
    }
    return -1;
}

console.log(bfs([0, 0]));