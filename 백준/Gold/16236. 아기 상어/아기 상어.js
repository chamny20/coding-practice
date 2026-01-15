const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const n = Number(input.shift());
const maps = input.map(line => line.split(' ').map(Number));
let sharkSize = 2;
let time = 0;
let eatCnt = 0;


const getSharkPos = (arr, n) => {
    let start = [0, 0];
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (arr[i][j] === 9) {
                start = [i, j];
            }
        }
    }
    return start;
}


let sharkPos = getSharkPos(maps, n);
let [x, y] = sharkPos;
maps[x][y] = 0;

const bfs = (start, visited) => {
    const [x, y] = start;
    visited[x][y] = true;
    const queue = [[x, y, 0]]; // 거리 기록
    
    const eatList = []; 

    while (queue.length) {
        const [curX, curY, curDis] = queue.shift();
        
        for (let i=0; i<dirs.length; i++) {
            const nx = curX + dirs[i][0];
            const ny = curY + dirs[i][1];
            
            if (nx>=0 && ny>=0 && nx<n && ny<n && !visited[nx][ny] && maps[nx][ny] <= sharkSize) {
                visited[nx][ny] = true;
               
                queue.push([nx, ny, curDis + 1]);
                
                if (0<maps[nx][ny] && maps[nx][ny]<sharkSize) {
                    eatList.push([nx, ny, curDis + 1]);
                }
            }
        }
    }
    
    
    if (eatList.length > 0) {
        eatList.sort((a, b) => {
            if (a[2] === b[2]) {
                if (a[0] === b[0]) {
                    return a[1] - b[1];
                }
                return a[0] - b[0];
            }
            return a[2] - b[2];
        });
        // 물고기 먹자
        const [sX, sY, sDis] = eatList[0];
        maps[sX][sY] = 0;
        eatCnt += 1;
        
        if (eatCnt === sharkSize) {
            sharkSize++;
            eatCnt = 0;
        }
        
        sharkPos = [sX, sY];
        time += sDis;
    }
    
    
    
    return eatList;
}






while (true) {
    const visited = Array.from(Array(n), () => Array(n).fill(false));
    const eatList = bfs(sharkPos, visited);
    
    if (eatList.length === 0) break;

}


console.log(time);