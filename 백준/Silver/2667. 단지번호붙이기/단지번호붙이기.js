const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const mapArr = input.map((v) => v.split("").map(Number));
let visited = Array.from(Array(n), () => Array(n).fill(false));
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
let ans = [];

const bfs = (x, y) => {
    const queue = [[x, y]];
    visited[x][y] = true;
    let cnt = 1;

    while(queue.length) {
        const [curX, curY] = queue.shift();

        for (let i=0; i<4; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if(nx>=0 && ny>=0 && nx<n && ny<n && mapArr[nx][ny] && !visited[nx][ny]) {
                queue.push([nx, ny]);
                cnt++;
                visited[nx][ny] = true;
            }
        }
    }
    
    return cnt;
}

for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (mapArr[i][j] && !visited[i][j]) {
            ans.push(bfs(i, j));
            visited[i][j] = true;
        }
        
    }
}


console.log(ans.length);
console.log(ans.sort((a,b) => a-b).join('\n'));