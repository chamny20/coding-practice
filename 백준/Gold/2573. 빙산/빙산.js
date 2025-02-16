const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.map(line => line.split(' ').map(Number));
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

// 빙산 녹이는 함수
const meltIceberg = () => {
    const melt = Array.from(Array(n), () => Array(m).fill(0));
    
    for (let x=0; x<n; x++) {
        for (let y=0; y<m; y++) {
            if (arr[x][y] > 0) {
                for (let i=0; i<dir.length; i++) {
                    const nx = x + dir[i][0];
                    const ny = y + dir[i][1];
                    
                    if (nx>=0 && ny>=0 && nx<n && ny<m && !arr[nx][ny]) {
                        melt[x][y]++; // 사방의 0 개수 세어서 melt[x][y]에 저장
                    }
                }
            }
        }
    }
    
    let isIceberg = false;
    
    for (let x=0; x<n; x++) {
        for (let y=0; y<m; y++) {
            arr[x][y] = Math.max(0, arr[x][y] - melt[x][y]);
            if (arr[x][y] > 0)
                isIceberg = true;
        }
    }
    
    return isIceberg;
}

// 빙산 덩어리 개수를 세는 BFS 함수
const countIceberg = () => {
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    let cnt = 0;
    
    const bfs = (start) => {
        const queue = [start];
        visited[start[0]][start[1]] = true;
        
        while (queue.length) {
            const [curX, curY] = queue.shift();
            
            for (let i=0; i<dir.length; i++) {
                const nx = curX + dir[i][0];
                const ny = curY + dir[i][1];
                
                if (nx>=0 && ny>=0 && nx<n && ny<m && arr[nx][ny]>0 && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    
    
    for (let x=0; x<n; x++) {
        for (let y=0; y<m; y++) {
            if (arr[x][y] > 0 && !visited[x][y]) {
                cnt++;
                if (cnt > 1) return cnt;
                bfs([x, y]);
            }
        }
    }
    return cnt;
}



let time = 0;

while (true) {
    if (!meltIceberg()) {
        console.log(0);
        return;
    }
    
    time++;
    
    if (countIceberg() >= 2) {
        console.log(time);
        return;
    }
}

