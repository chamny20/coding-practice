const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const t = Number(input.shift());
const dir = [[2, 1], [-2, 1], [-2, -1], [2, -1], [1, 2], [1, -2], [-1, -2], [-1, 2]];

const bfs = (start, target, visited, n) => {
    const [x, y] = start;
    const queue = [[x, y, 0]];
    visited[start[0]][start[1]] = true;
    const [tx, ty] = target;
    
    while (queue.length) {
        const [curX, curY, cnt] = queue.shift();
        
        if (curX === tx && curY === ty) return cnt;
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && nx<n && ny<n && !visited[nx][ny]) {
                queue.push([nx, ny, cnt+1]);
                visited[nx][ny] = true;
            }
        }
    }
    return -1;
}

const ans = [];
for (let i=0; i<t; i++) {
    const n = Number(input.shift());
    const [x, y] = input.shift().split(' ').map(Number);
    const [tx, ty] = input.shift().split(' ').map(Number);
    const visited = Array.from(Array(n), () => Array(n).fill(false));
    
    let cnt = bfs([x, y], [tx, ty], visited, n);
    ans.push(cnt);
}

console.log(ans.join("\n"));