const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [m, n, h] = input.shift().split(' ').map(Number);
const dir = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
const tomatoes = Array.from(Array(h), () => Array.from(Array(n), () => Array(m).fill(false)));

// 3차원 배열에 input 넣기
for (let i=0; i<h; i++) {
    for (let j=0; j<n; j++) {
        tomatoes[i][j] = input.shift().split(" ").map(Number);
    }
}

const bfs = () => {
    const queue = [];
    let start = 0;
    
    // 익은 토마토 큐에 넣기
    for (let z=0; z<h; z++) {
        for (let y=0; y<n; y++) {
            for (let x=0; x<m; x++) {
                if (tomatoes[z][y][x]===1) {
                    queue.push([z, y, x]);
                } 
            }
        }
    }
    
    while (start < queue.length) {
        const [curZ, curY, curX] = queue[start++];
        
        for (let i=0; i<dir.length; i++) {
            const nz = curZ + dir[i][2];
            const ny = curY + dir[i][1];
            const nx = curX + dir[i][0];
            
            if(nx>=0 && ny>=0 && nz>=0 && nx<m && ny<n && nz<h && tomatoes[nz][ny][nx]===0) {
                queue.push([nz, ny, nx]);
                tomatoes[nz][ny][nx] = tomatoes[curZ][curY][curX] + 1;
            }
        }
    }
}

let totalDays = 0; // 토마토가 익는 최소 일수

bfs();

for (let z=0; z<h; z++) {
    for (let y=0; y<n; y++) {
        for (let x=0; x<m; x++) {
            if (!tomatoes[z][y][x]) {
                console.log(-1);
                return;
            }
            totalDays = Math.max(totalDays, tomatoes[z][y][x]);
        }
    }
}

console.log(totalDays-1);