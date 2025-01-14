const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [r, c] = input.shift().split(' ').map(Number);
const maps = input.map(line => line.split(''));
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const visited = Array(26).fill(false); // 알파벳 개수 26개 방문 배열 처리
const item = (x, y) => maps[x][y].charCodeAt() - 65; // 알파벳 => 정수 변환
let ans = 0;

const dfs = (start, cnt) => { 
    const [x, y] = start;
    visited[item(x, y)] = true;
    
    ans = Math.max(ans, cnt);
    
    for (let i=0; i<dir.length; i++) {
        const nx = x + dir[i][0];
        const ny = y + dir[i][1];
        
        if (nx>=0 && ny>=0 && nx<r && ny<c && !visited[item(nx, ny)]) {
            dfs([nx, ny], cnt+1);
        }
    }
    visited[item(x, y)] = false;
}

dfs([0, 0], 1);
console.log(ans);