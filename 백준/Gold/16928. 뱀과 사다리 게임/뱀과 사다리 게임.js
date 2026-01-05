const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);

const board = Array(101).fill(0);

// 사다리
for (let i = 0; i < n; i++) {
    const [x, y] = input.shift().split(' ').map(Number);
    board[x] = y;
}

// 뱀
for (let i = 0; i < m; i++) {
    const [u, v] = input.shift().split(' ').map(Number);
    board[u] = v;
}


const dice = [1, 2, 3, 4, 5, 6];

const bfs = (start) => {
    // cur, 숫자, 주사위
    const visited = Array(101).fill(false);
    visited[1] = true;
    const queue = [[start, 0]];
    
    while (queue.length) {
        const [cur, cnt] = queue.shift();
        
        if (cur === 100) return cnt;
        
        for (let i=0; i<dice.length; i++) {
            let next = cur + dice[i];
            if (next > 100) continue;
            
            // 만약 사다리/뱀 칸이면
            if (board[next] !== 0) {
                next = board[next];
            }
            
            if (!visited[next]) {
                queue.push([next, cnt + 1]);
                visited[next] = true;
            }
           
        }
    }
    return -1;
}


const res = bfs(1);

console.log(res);