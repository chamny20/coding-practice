const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

const bfs = (start, maps, w, h, visited) => {
    const queue = [start];
    visited[start[0]][start[1]] = true;
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<h && ny<w && !visited[nx][ny] && maps[nx][ny]) {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
}

let i = 0;
while (i < input.length) {
    const [w, h] = input[i].split(" ").map(Number);
    if (w === 0 && h === 0) break;
    
    const maps = [];
    for (let j=i+1; j<=h+i; j++) {
        maps.push(input[j].split(' ').map(Number)); // maps 만들기
    }
    
    i += h+1;
    
    const visited = Array.from(Array(h), () => Array(w).fill(false));
    let count = 0; // 섬 개수 카운팅 변수
    
    for (let x=0; x<h; x++) {
        for (let y=0; y<w; y++) {
            if (maps[x][y] && !visited[x][y]) {
                bfs([x, y], maps, w, h, visited);
                count++;
            }
        }
    }
    console.log(count);
}
                
     