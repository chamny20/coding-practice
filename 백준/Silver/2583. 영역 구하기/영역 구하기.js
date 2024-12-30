const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [m, n, k] = input.shift().split(' ').map(Number);
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
let mapArr = Array.from(Array(m), () => Array(n).fill(0));
let ans = [];

// map에 숫자(0 or 1) 채우기
for (let i=0; i<k; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    
    for (let y=m-y2; y<m-y1; y++) {
        for (let x=x1; x<x2; x++) {
            mapArr[y][x] = 1; // 영역 안이면 1로 처리
        }
    }
}

// BFS 구현
const bfs = (x, y) => {
    const queue = [[x, y]];
    let area = 0; // 영역 카운트할 변수
    
    while (queue.length) {
        const [curY, curX] = queue.shift();
        area++;
        
        for (let i=0; i<4; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if (nx>=0 && ny>=0 && ny<m && nx<n && !mapArr[ny][nx]) {
                mapArr[ny][nx] = 1;
                queue.push([ny, nx]);
            }
        }
    }
    return area;
}

for (let i=0; i<m; i++) {
    for (let j=0; j<n; j++) {
        if (!mapArr[i][j]) {
            mapArr[i][j] = 1;
            ans.push(bfs(i, j));
        }
    }
}

console.log(ans.length);
console.log(ans.sort((a,b) => a-b).join(' '));