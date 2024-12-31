const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCnt = Number(input.shift()); // 테스트 케이스의 수
const dir = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
let ans = [];

const bfs = (start, target, visited, n) => {
    const queue = [start];
    visited[start[0]][start[1]] = true;
    
    while (queue.length) {
        const [curX, curY, distance] = queue.shift();
        
        if (curX === target[0] && curY === target[1]) return distance;
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<n && ny<n && !visited[nx][ny]) {
                queue.push([nx, ny, distance+1]);
                visited[nx][ny] = true;
            }
        }
    }
    return -1;
}

for (let i=0; i<input.length; i+=3) {
    const n = Number(input[i]);
    let distance = 0;
    const start = input[i+1].split(" ").map(Number);
    start.push(distance);
    const target = input[i+2].split(" ").map(Number);
    const visited = Array.from(Array(n), () => Array(n).fill(false));
    
    ans.push(bfs(start, target, visited, n));
}



console.log(ans.join("\n"));








