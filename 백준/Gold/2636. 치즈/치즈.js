const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [w, l] = input.shift().split(" ").map(Number);
const maps = input.map((v) => v.split(" ").map(Number));
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const bfs = (start) => {
    const visited = Array.from(Array(w), () => Array(l).fill(false));
    const queue = [start];
    visited[start[0]][start[1]] = true;
    let meltedCnt = 0; // 매 이터레이션마다 녹은 치즈 개수
    
    while (queue.length) {
        const [curX, curY] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<w && ny<l && !visited[nx][ny]) {
                visited[nx][ny] = true;

                if (maps[nx][ny]) {
                    maps[nx][ny] = 0; // 치즈 만나면 녹이기
                    meltedCnt++;
                } else {
                    queue.push([nx, ny]);
                }
            }
        }
    }
    return meltedCnt;
}

let hourCnt = 0;
let lastMeltedCnt = 0;

while (true) {
    const meltedCnt = bfs([0, 0]);
    if (!meltedCnt) break;
    lastMeltedCnt = meltedCnt;
    hourCnt++;
}

console.log(hourCnt);
console.log(lastMeltedCnt);