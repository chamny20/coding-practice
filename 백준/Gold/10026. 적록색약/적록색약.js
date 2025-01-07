const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const maps = input.map((v) => v.split(""));
const abMaps = input.map((line) => 
    line.split("").map((cell) => cell === 'G' ? 'R' : cell)
);
const visited = Array.from(Array(n), () => Array(n).fill(false));
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
let normalCnt = 0;
let abnormalCnt = 0;

const dfs = (start, visited, maps) => {
    visited[start[0]][start[1]] = true;
    
    for (let i=0; i<dir.length; i++) {
        const nx = start[0] + dir[i][0];
        const ny = start[1] + dir[i][1];
        
        if (nx>=0 && ny>=0 && nx<n && ny<n && !visited[nx][ny] && maps[nx][ny] === maps[start[0]][start[1]]) {
            dfs([nx, ny], visited, maps);
        }
    }
}

// 적록색약이 아닌 사람이 봤을 때
for (let x=0; x<n; x++) {
    for (let y=0; y<n; y++) {
        if (!visited[x][y]) {
            dfs([x, y], visited, maps);
            normalCnt++;
        }
    }
}
const abVisited = Array.from(Array(n), () => Array(n).fill(false));
// 적록색약인 사람이 봤을 때
for (let x=0; x<n; x++) {
    for (let y=0; y<n; y++) {
        if (!abVisited[x][y]) {
            dfs([x, y], abVisited, abMaps);
            abnormalCnt++;
        }
    }
}

console.log(normalCnt + ' ' + abnormalCnt);