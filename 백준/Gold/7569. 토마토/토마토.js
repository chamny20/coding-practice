const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [m, n, h] = input.shift().split(' ').map(Number);
const dir = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
const tomatoes = Array.from(Array(h), () => Array.from(Array(n), () => Array(m).fill(false)));

// 3차원 배열에 input 넣기
for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
        tomatoes[i][j] = input.shift().split(" ").map(Number);
    }
}

const bfs = () => {
    const queue = [];
    let start = 0;

    // 익은 토마토 큐에 넣기
    for (let z = 0; z < h; z++) {
        for (let y = 0; y < n; y++) {
            for (let x = 0; x < m; x++) {
                if (tomatoes[z][y][x] === 1) {
                    queue.push([z, y, x]);
                }
            }
        }
    }

    while (start < queue.length) {
        const [curZ, curY, curX] = queue[start++];
        
        for (const [dx, dy, dz] of dir) {
            const nz = curZ + dz;
            const ny = curY + dy;
            const nx = curX + dx;

            // 유효한 범위 내에서 안 익은 토마토에 접근
            if (nz >= 0 && ny >= 0 && nx >= 0 && nz < h && ny < n && nx < m && tomatoes[nz][ny][nx] === 0) {
                queue.push([nz, ny, nx]);
                tomatoes[nz][ny][nx] = tomatoes[curZ][curY][curX] + 1; // 일수 기록
            }
        }
    }
};

let totalDays = 0; // 토마토가 익는 최소 일수

bfs();

for (let z = 0; z < h; z++) {
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (tomatoes[z][y][x] === 0) {
                console.log(-1);
                return;
            }
            totalDays = Math.max(totalDays, tomatoes[z][y][x]);
        }
    }
}

console.log(totalDays - 1);
