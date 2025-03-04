function solution(maps) {
    var answer = [];
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const bfs = (start) => {
        const [x, y] = start;
        const queue = [start];
        visited[x][y] = true;
        let sum = Number(maps[x][y]);
        
        while (queue.length) {
            const [curX, curY] = queue.shift();
            
            for (let i=0; i<dir.length; i++) {
                const nx = curX + dir[i][0];
                const ny = curY + dir[i][1];
                
                if (nx>=0 && ny>=0 && nx<n && ny<m && !visited[nx][ny] && maps[nx][ny]!=='X') {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                    sum += Number(maps[nx][ny]);
                }
            }
        }
        return sum;
    }
    
    for (let x=0; x<n; x++) {
        for (let y=0; y<m; y++) {
            if (!visited[x][y] && maps[x][y]!=='X') {
                const sum = bfs([x, y]);
                answer.push(sum);
            }
        }
    }
    
    return answer.length > 0 ? answer.sort((a, b) => a-b) : [-1];
}