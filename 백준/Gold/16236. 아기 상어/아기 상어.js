const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const maps = input.map((v) => v.split(" ").map(Number));
const dir = [[1, 0], [-1, 0], [0, -1], [0, 1]];
let sharkSize = 2; // 아기상어 크기 초기값
let sharkX = 0;
let sharkY = 0;

// 아기 상어 좌표 위치 구하기
maps.forEach((row, i) => {
  row.forEach((value, j) => {
    if (value === 9) {
        sharkX = i;
        sharkY = j;
        maps[i][j] = 0; // 초기 아기상어 위치 다시 0으로
    }
  });
});

let fishCnt = 0;
let ans = 0;

function eat(fishList) {
    const [x, y, dist] = fishList;
    maps[x][y] = 0;
    fishCnt += 1;
    
    if (fishCnt === sharkSize) {
        sharkSize += 1;
        fishCnt = 0;
    }
    
    sharkX = x;
    sharkY = y;
    ans += dist;
}


// 가장 가까운 물고기 찾기
const bfs = () => {
    const visited = Array.from(Array(n), () => Array(n).fill(false));
    const queue = [[sharkX, sharkY, 0]]; // 시작 위치 및 시간(초) 저장
    visited[sharkX][sharkY] = true;
    
    let fishList = []; // 먹을 수 있는 물고기를 저장할 배열
    
    while (queue.length) {
        const [curX, curY, dist] = queue.shift();
        
        for (let i=0; i<dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];
            
            if(nx>=0 && ny>=0 && nx<n && ny<n && !visited[nx][ny]) {
                visited[nx][ny] = true;
                
                if (maps[nx][ny] <= sharkSize) { // 지나갈 수 있는 조건
                    queue.push([nx, ny, dist+1]);
                    
                    // 먹을 수 있는 물고기 조건
                    if (maps[nx][ny] > 0 && maps[nx][ny] < sharkSize) {
                        fishList.push([nx, ny, dist+1]); // 물고기 위치 및 거리 저장
                    }
                }
            }
        }
    }
    
    // 먹을 수 있는 물고기가 있는 경우
    if (fishList.length > 0) {
        // 거리 → 가장 위 → 가장 왼쪽 순으로 우선순위
        fishList.sort((a,b) => {
            if (a[2] === b[2]) {  // 거리가 같은 경우
                if (a[0] === b[0])
                    return a[1] - b[1];
                return a[0] - b[0];
            }
            return a[2] - b[2];
        }) ;
        
        eat(fishList[0]);
    }
    
    return fishList.length; // 먹을 수 있는 물고기가 있는지 여부를 확인하기 위해
}


while(true) {
    const cnt = bfs();
    if (cnt === 0) break;
}

console.log(ans);
