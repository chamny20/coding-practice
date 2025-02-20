const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input.shift());
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
// 서로 다른 # 두 개 이상이 붙어있다면 => 한 무리의 양들이 있는 것..
// 그냥 쉽게 생각하면 됨 => 연결 요소처럼

const bfs = (start, visited, row, col, maps) => {
    const [x, y] = start;
    visited[x][y] = true;
    const queue = [start];
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<row && ny<col && !visited[nx][ny] && maps[nx][ny] === '#') {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
}

const result = [];

for (let i=0; i<t; i++) {
    const [h, w] = input.shift().split(' ').map(Number);
    const maps = [];
    for (let j=0; j<h; j++) {
        const list = input.shift().split('');
        maps.push(list);
    }
    const visited = Array.from(Array(h), () => Array(w).fill(false));
    let cnt = 0;
    for (let x=0; x<h; x++) {
        for (let y=0; y<w; y++) {
            if (!visited[x][y] && maps[x][y] === '#') {
                bfs([x, y], visited, h, w, maps);
                cnt++;
            }
        }
    }
    result.push(cnt);
    
}

console.log(result.join('\n'));