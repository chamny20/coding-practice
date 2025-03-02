const input = require('fs').readFileSync("/dev/stdin", 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const maps = input.map(line => line.split(' ').map(Number));
// 어떤 칸의 안전거리 = 해당 칸과 가장 거리가 가까운 아기 상어와의 거리
// 8방향
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
// 안전 거리가 가장 큰 칸 구하기

const queue = [];
const bfs = () => {
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<n && ny<m && maps[nx][ny]===0) {
                maps[nx][ny] = maps[curX][curY] + 1;
                queue.push([nx, ny]);
            }
        }
    }
}

for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
        if (maps[i][j]) {
            queue.push([i, j]);
        }
    }
}

bfs();
console.log(Math.max(...maps.map(line => Math.max(...line)))-1);
