const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, L, R] = input.shift().split(' ').map(Number);
const maps = input.map(line => line.split(' ').map(Number));
const dirs = [[1, 0], [0, 1], [0, -1], [-1, 0]];

const bfs = (start, visited) => {
    const [x, y] = start;
    const queue = [[x, y]];
    const posList = [];
    let sum = 0;
    
    visited[x][y] = true;
    posList.push([x, y]);
    sum += maps[x][y];
    
    while (queue.length) {
        const [curX, curY] = queue.shift();

        for (let i=0; i<dirs.length; i++) {
            const nx = curX + dirs[i][0];
            const ny = curY + dirs[i][1];
            
            if (nx>=0 && ny>=0 && nx<N && ny<N && !visited[nx][ny]) {
                const diff = Math.abs(maps[curX][curY] - maps[nx][ny]);
                if (L <= diff && diff <= R) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                    sum += maps[nx][ny];
                    posList.push([nx, ny]);
                }
            }
        }
    }
    
    if (posList.length > 1) {
        const val = Math.floor(sum / posList.length);
        
        posList.map(([posX, posY]) => {
            maps[posX][posY] = val;
        });
        return true;
    }
    
    return false;
}

let days = 0;

while (true) {
    let isMoved = false;
    const visited = Array.from(Array(N), () => Array(N).fill(false));
    
    for (let i=0; i<N; i++) {
        for (let j=0; j<N; j++) {
            if (!visited[i][j]) {
                const res = bfs([i, j], visited);
                if (isMoved) continue;
                if (res) isMoved = true;
            }
        }
    }

    if (!isMoved) break;
    
    days++;
}


console.log(days);
