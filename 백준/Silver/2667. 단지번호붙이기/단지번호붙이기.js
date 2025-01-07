const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const dir = [[1, 0], [-1, 0], [0, -1], [0, 1]];
const maps = input.map((v) => v.split("").map(Number));
const visited = Array.from(Array(n), () => Array(n).fill(false));
let result = [];

const dfs = (start, visited) => {
    let cnt = 1; // 집 개수
    visited[start[0]][start[1]] = true;
    
    for (let i=0; i<dir.length; i++) {
        const nx = start[0] + dir[i][0];
        const ny = start[1] + dir[i][1];
        
        if(nx>=0 && ny>=0 && nx<n && ny<n && !visited[nx][ny] && maps[nx][ny]) {
            cnt += dfs([nx, ny], visited); // 연결된 집을 재귀적으로 탐색하여 개수 누적
        }
    }
    return cnt;
}

for (let x=0; x<n; x++) {
    for (let y=0; y<n; y++) {
        if (!visited[x][y] && maps[x][y]===1) {
            let cnt = dfs([x, y], visited);
            result.push(cnt);
        }
    }
}

console.log(result.length);
console.log(result.sort((a,b) => a-b).join("\n"));