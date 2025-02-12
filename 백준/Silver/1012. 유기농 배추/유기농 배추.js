const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const t = Number(input.shift());
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // 상하좌우 이동
const result = [];

const bfs = (start, visited, m, n, maps) => {
    const queue = [start];
    visited[start[0]][start[1]] = true;
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<m && ny<n && !visited[nx][ny] && maps[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny])
            }
        }
    }
}

for (let i=0; i<t; i++) {
    const [m, n, k] = input.shift().split(' ').map(Number);
    const maps = Array.from(Array(m), () => Array(n).fill(0));
    const visited = Array.from(Array(m), () => Array(n).fill(false));
    
    // 배추 위치 저장
    for (let j=0; j<k; j++) {
        const [x, y] = input.shift().split(' ').map(Number);
        maps[x][y] = 1;
    }
    
    let cnt = 0;
    for (let cx=0; cx<m; cx++) {
        for (let cy=0; cy<n; cy++) {
            if (!visited[cx][cy] && maps[cx][cy]) {
                bfs([cx, cy], visited, m, n, maps);
                cnt++;
            }
        }
    }
    result.push(cnt);
    

}

console.log(result.join('\n'));