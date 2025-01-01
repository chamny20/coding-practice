const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [r, c] = input.shift().split(" ").map(Number);
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const visited = Array.from(Array(r), () => Array(c).fill(false));

const bfs = (start) => {
    const queue = [start];
    visited[start[0]][start[1]] = true;
    let oCnt = 0;
    let vCnt = 0;
    if (input[start[0]][start[1]] === 'o') oCnt++;
    if (input[start[0]][start[1]] === 'v') vCnt++;
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<r && ny<c && !visited[nx][ny] && input[nx][ny] !== '#') {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
                
                if (input[nx][ny] === 'o') oCnt++;
                if (input[nx][ny] === 'v') vCnt++;
            }
        }
    }
    
    return [oCnt, vCnt];
}

let totalSheep = 0;
let totalWolf = 0;

for (let x=0; x<r; x++) {
    for (let y=0; y<c; y++) {
        if (!visited[x][y] && input[x][y] !== '#') {
            const [sheep, wolf] = bfs([x, y]);
            
            // 각 수 비교
            if (sheep > wolf) {
                totalSheep += sheep;
            } else {
                totalWolf += wolf;
            }
        }
    }
}

console.log(totalSheep + ' ' + totalWolf);