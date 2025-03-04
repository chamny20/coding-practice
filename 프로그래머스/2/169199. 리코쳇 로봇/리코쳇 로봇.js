function solution(board) {
    var answer = -1;
    const n = board.length;
    const m = board[0].length;
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    let startPos; 
    let targetPos;
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (board[i][j] === 'R')
                startPos = [i, j];
        }
    }
    
    const bfs = (start, target) => {
        const [x, y] = start;
        const queue = [[x, y, 0]];
        visited[x][y] = true;
        
        while (queue.length) {
            const [curX, curY, cnt] = queue.shift();
            
            if (board[curX][curY] === 'G') {
                answer = cnt;
                break;
            }
            
            for (let i=0; i<dir.length; i++) {
                let nx = curX + dir[i][0];
                let ny = curY + dir[i][1];
                
                while (nx>=0 && ny>=0 && nx<n && ny<m && board[nx][ny]!=='D') {
                    nx += dir[i][0];
                    ny += dir[i][1];
                }
                
                nx -= dir[i][0];
                ny -= dir[i][1];
                
                if (!visited[nx][ny]) {
                    queue.push([nx, ny, cnt + 1]);
                    visited[nx][ny] = true;
                }
            }
        }
    }
    
    bfs(startPos, targetPos);
    
    return answer;
}