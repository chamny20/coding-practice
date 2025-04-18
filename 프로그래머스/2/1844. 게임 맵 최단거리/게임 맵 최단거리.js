function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    const bfs = (start) => {
        const [x, y] = start;
        const queue = [[x, y, 1]];
        visited[x][y] = true;
        
        while (queue.length) {
            const [curX, curY, dist] = queue.shift();
            
            if (curX === n-1 && curY === m-1) return dist;
            
            for (let i=0; i<dir.length; i++) {
                const nx = curX + dir[i][0];
                const ny = curY + dir[i][1];
                
                if (nx>=0 && ny>=0 && nx<n && ny<m && !visited[nx][ny] && maps[nx][ny]) {
                    queue.push([nx, ny, dist + 1]);
                    visited[nx][ny] = true;
                }
            }
        }
        
        return -1;
    }
    
    const val = bfs([0, 0]);
    return val > 0 ? val : -1;
}