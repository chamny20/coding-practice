const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [r, c] = input.shift().split(' ').map(Number);
const maps = input.map(line => line.split(''));
const visited = Array.from(Array(r), () => Array(c).fill(false));
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const bfs = (start) => {
    const queue = [start];
    visited[start[0]][start[1]] = true;
    let sheepCnt = 0;
    let wolfCnt = 0;
    if (maps[start[0]][start[1]] === 'v') 
        wolfCnt++;
    else if (maps[start[0]][start[1]] === 'k')
        sheepCnt++;
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<r && ny<c && !visited[nx][ny] && maps[nx][ny]!== '#') {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
                
                if (maps[nx][ny] === 'v') {
                    wolfCnt++;
                } else if (maps[nx][ny] === 'k') {
                    sheepCnt++;
                }
            }
        }
    }
    
    if (sheepCnt > wolfCnt) 
        wolfCnt = 0;
    else
        sheepCnt = 0;
    
    return [sheepCnt, wolfCnt];
}

let totalWolf = 0;
let totalSheep = 0;

for (let i=0; i<r; i++) {
    for (let j=0; j<c; j++) {
        if (!visited[i][j] && maps[i][j] !== '#') {
            const [s, w] = bfs([i, j]);
            totalWolf += w;
            totalSheep += s;
        }
    }
}

console.log(totalSheep + ' ' + totalWolf);