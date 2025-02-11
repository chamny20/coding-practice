const input = require('fs').readFileSync("/dev/stdin", 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
let maps = input.map(line => line.split(' ').map(Number));
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const bfs = (start) => {
    const queue = [start];
    const visited = Array.from(Array(n), () => Array(m).fill(0));

    visited[start[0]][start[1]] = 1;
    let cnt = 0;
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<n && ny<m) {
                if (maps[nx][ny] === 1) {
                    visited[nx][ny]++;
                } else if (maps[nx][ny] === 0 && !visited[nx][ny]) {
                    visited[nx][ny] = 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (visited[i][j] >= 2) {
                maps[i][j] = 0;
                cnt++;
            }
        }
    }
    return cnt;
}

let h = 0;

while (true) {
    const meltedCnt = bfs([0, 0]);
    if (!meltedCnt) break;
    h++;
}

console.log(h);