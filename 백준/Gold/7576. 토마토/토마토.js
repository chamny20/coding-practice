const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(" ").map(Number);
const tomatoes = input.map((v) => v.split(" ").map(Number));
const dir = [[1, 0], [-1, 0], [0, -1], [0, 1]];

const bfs = () => {
    const queue = [];
    let start = 0;
    
    for (let x=0; x<m; x++) {
        for (let y=0; y<n; y++) {
             if (tomatoes[x][y] === 1) {
                 queue.push([x, y]);
             }
        }
    }
    
    while (start < queue.length) {
        const [curX, curY] = queue[start++];
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<m && ny<n && tomatoes[nx][ny]===0) {
                queue.push([nx, ny]);
                tomatoes[nx][ny] = tomatoes[curX][curY] + 1;
            }
        }
    }
}
    
bfs();

let totalDays = 0;

for (let x=0; x<m; x++) {
    for (let y=0; y<n; y++) {
        if (tomatoes[x][y]===0) {
            console.log(-1);
            return;
        }
        totalDays = Math.max(totalDays, tomatoes[x][y]);
    }
}

console.log(totalDays-1);