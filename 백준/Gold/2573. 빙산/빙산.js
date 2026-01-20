const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const [n, m] = input.shift().split(' ').map(Number);
let maps = input.map(line => line.split(' ').map(Number));

// 개별 녹이기
const meltingCnt = (pos) => {
    const [x, y] = pos;
    let cnt = 0;
    for (let i=0; i<dirs.length; i++) {
        const nx = x + dirs[i][0];
        const ny = y + dirs[i][1];
        if (nx>=0 && ny>=0 && nx<n && ny<m && maps[nx][ny]===0) {
            cnt++;
        }
    }
    return cnt;
}

const melt = () => {
    const nextMaps = Array.from(Array(n), () => Array(m).fill(0));
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (maps[i][j] > 0) {
                const cnt = meltingCnt([i, j]);
                nextMaps[i][j] = Math.max(0, maps[i][j] - cnt);
            }
        }
    }
    
    
    return nextMaps;
}

const bfs = (start, visited) => {
    const [x, y] = start;
    const queue = [[x, y]];
    visited[x][y] = true;
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dirs.length; i++) {
            const nx = curX + dirs[i][0];
            const ny = curY + dirs[i][1];
            if (nx>=0 && ny>=0 && nx<n && ny<m && !visited[nx][ny] && maps[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                
                //const cnt = meltingCnt([nx, ny]);
                //const diff = maps[nx][ny] - cnt;
                //maps[nx][ny] = diff < 0 ? 0 : diff;
            }
        }
    }
}


const progress = (maps) => {
    let cnt = 0;
    const visited = Array.from(Array(n), () => Array(m).fill(false));

    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (maps[i][j] !== 0 && !visited[i][j]) {
                bfs([i, j], visited);
                cnt++;
            }
        }
    }
    return cnt;
}

let year = 0;

while (true) {
    const cnt = progress(maps);
    
    if (cnt >= 2) break;
    
    if (cnt === 0) {
        year = 0;
        break;
    }
    
    maps = melt();
    year++;   
}

console.log(year);

