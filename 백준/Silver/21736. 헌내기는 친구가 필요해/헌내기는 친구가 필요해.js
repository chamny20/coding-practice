const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const mapArr = input.map((v) => v.split(""));
const visited = Array.from(Array(n), () => Array(m).fill(false));
const dir = [[1, 0], [-1, 0], [0, -1], [0, 1]];
let cnt = 0;

const bfs = (x, y) => {
    const queue = [[x, y]];
    visited[x][y] = true;
    
    while(queue.length) {
        const [curX, curY] = queue.shift();
        if(mapArr[curX][curY] === 'P') cnt++;
        
        for (let i=0; i<4; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<n && ny<m && !visited[nx][ny] && mapArr[nx][ny] !== 'X') {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
    return cnt;
}

let answer = 0;

for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
        if (!visited[i][j] && mapArr[i][j] === 'I') {
            visited[i][j] = true;
            answer += bfs(i, j);
        }
    }
}

console.log(answer === 0 ? 'TT' : answer);