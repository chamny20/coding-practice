let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input.shift().split(" ").map(Number);
const mapArr = input.map((v) => v.split('').map(Number));
const [goalY, goalX] = [n-1, m-1];
const ds = [[-1, 0], [1, 0], [0, 1], [0, -1]];

const BFS = () => {
    const queue = [[0, 0, 1]]; // 시작점 큐에 등록
    
    while (queue.length) {
        const [curY, curX, distance] = queue.shift(); // 좌표
        
        if (goalX === curX && goalY === curY) return distance;
        
        for (let i=0; i<4; i++) {
            const nx = curX + ds[i][0];
            const ny = curY + ds[i][1];
            
            if (nx>=0 && nx<m && ny>=0 && ny<n && mapArr[ny][nx]) {
                mapArr[ny][nx] = 0;
                queue.push([ny, nx, distance + 1]);
            }
        }
        
    }
}

console.log(BFS());