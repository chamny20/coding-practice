function solution(board) {
    const n = board.length;
    const direction = [[1, 0], [-1, 0], [0, -1], [0, 1]]; 
    const dp = Array(n).fill().map(() => Array(n).fill().map(() => Array(4).fill(Infinity)));

    const bfs = () => {
        const queue = [[0, 0, 0, 0], [0, 0, 0, 3]];

        while (queue.length) {
            const [curX, curY, cost, dir] = queue.shift(); 
            
            for (let i=0; i<direction.length; i++) {
                const nx = curX + direction[i][0];
                const ny = curY + direction[i][1];
                
                if (nx>=0 && ny>=0 && nx<n && ny<n && !board[nx][ny]) {
                    let newCost = cost + 100;
                    
                    if (dir !== i)  newCost += 500;
                    
                    if (newCost < dp[nx][ny][i]) {
                        dp[nx][ny][i] = newCost;
                        queue.push([nx, ny, newCost, i]);
                    }

                }
            }
        }
    }
    
    bfs();
    console.log(dp);
    
    return Math.min(...dp[n-1][n-1]);
}