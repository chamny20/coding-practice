const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const maps = input.map(line => line.split(' ').map(Number));
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const visited = Array.from(Array(n), () => Array(m).fill(false));

const bfs = (start) => {
    const queue = [start];
    visited[start[0]][start[1]] = true;
    let cnt = 1;
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<n && ny<m && !visited[nx][ny] && maps[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                cnt++;
            }
        }
    }
    return cnt;
}

const result = [];

for (let x=0; x<n; x++) {
    for (let y=0; y<m; y++) {
        if (!visited[x][y] && maps[x][y]) {
            let extent = bfs([x, y]);
            result.push(extent);
        }
    }
}

result.sort((a, b) => b-a);
console.log(result.length);
console.log(result.length ? result[0] : 0);