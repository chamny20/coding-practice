function solution(maps) {
    var answer = 0;
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    
    const bfs = (x, y) => {
        const queue = [[x, y, 1]];
        visited[x][y] = true;
        
        while (queue.length) {
            const [curX, curY, distance] = queue.shift();
            
            if (curX === n-1 && curY === m-1) 
                return distance;
            
            for (let i=0; i<4; i++) {
                const nx = curX + dir[i][0];
                const ny = curY + dir[i][1];
                
                if(nx>=0&&ny>=0&&nx<n&&ny<m && maps[nx][ny] && !visited[nx][ny]) {
                    
                    queue.push([nx, ny, distance+1]);
                    visited[nx][ny] = true;
                }
            }
        }
        return -1;
    }
    
    
    answer = bfs(0, 0); 
    
    return answer>0 ? answer : -1;
}