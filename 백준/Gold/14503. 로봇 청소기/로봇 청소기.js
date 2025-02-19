const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const [r, c, d] = input.shift().split(' ').map(Number);
const arr = input.map(line => line.split(' ').map(Number));
const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // 상우하좌(북동남서) 순으로

// 청소한 칸은 2로, 벽: 1, 빈칸: 0
const bfs = (x, y, dir) => {
    const queue = [[x, y, dir]];
    arr[x][y] = 2; // 청소 완료 처리
    let cnt = 0;
    cnt++; // 청소 칸 개수 증가
    
    while (queue.length) {
        const [curX, curY, curDir] = queue.shift();
        let tempDir = curDir;
        let turn = 0; // 4방향 회전 여부 저장
        
        for (let i=0; i<direction.length; i++) {
            const nd = (tempDir + 3) % 4; // 왼쪽으로 90 회전
            const nx = curX + direction[nd][0];
            const ny = curY + direction[nd][1];
            tempDir = nd;
            
            if (nx>=0 && ny>=0 && nx<n && ny<m) {
                if (arr[nx][ny] === 0) { // 청소되지 않은 칸 
                    queue.push([nx, ny, nd]);
                    arr[nx][ny] = 2;
                    cnt++;
                    break;
                } else {
                    turn++; // 모든 방향이 청소되었거나 벽이면 방향 변경
                }
            } 
        }
        if (turn === 4) {
            let bx = curX + direction[(curDir + 2) % 4][0];
            let by = curY + direction[(curDir + 2) % 4][1];
            
            if (arr[bx][by] === 1) return cnt;
            queue.push([bx, by, curDir]);
        }
    
    }
    return cnt;
}

console.log(bfs(r, c, d));
