const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
const result = [];

const dfs = (start, w, h, visited, maps) => {
    const [x, y] = start;
    visited[x][y] = true;
    
    for (let i = 0; i < dir.length; i++) {
        const nx = x + dir[i][0];
        const ny = y + dir[i][1];
        
        if (nx >= 0 && ny >= 0 && nx < h && ny < w && !visited[nx][ny] && maps[nx][ny]) {
            dfs([nx, ny], w, h, visited, maps);
        }
    }    
}

while (input.length) {
    const [w, h] = input.shift().split(" ").map(Number);
    if (w === 0 && h === 0) break;
    
    const maps = [];
    let count = 0;
    
    for (let i = 0; i < h; i++) {
        maps.push(input.shift().split(" ").map(Number));
    }
    const visited = Array.from(Array(h), () => Array(w).fill(false));
    
    for (let x = 0; x < h; x++) {
        for (let y = 0; y < w; y++) {
            if (!visited[x][y] && maps[x][y]) {
                dfs([x, y], w, h, visited, maps);
                count++;
            }
        }
    }
    result.push(count);
}

console.log(result.join('\n'));
