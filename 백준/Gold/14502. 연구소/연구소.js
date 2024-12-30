const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input.shift().split(" ").map(Number);
const mapArr = input.map((v) => v.split(" ").map(Number));
let empty = []; // 0인 좌표위치를 담은 큐 배열
let virus = []; // 바이러스가 퍼진 곳 좌표 담을 배열
let safeArea = []; // 안전영역 카운팅 수 담을 배열 -> 나중에 최댓값 찾을 예정
const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
// 0은 빈칸, 1은 벽, 2는 바이러스가 있는 곳
// 벽 3개를 어떻게 세워야할까?
// 빈 공간에 돌아가며 BFS 진행 -> 결과값들 중 최대값 구하기
// 즉, 벽 3개를 돌아가며 세우는 반복문 안에서 BFS 진행
// 빈 공간의 좌표 위치, 그리고 바이러스 감염된 곳의 좌표 위치가 필요함

for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
        if(mapArr[i][j] === 0) {
            empty.push([i, j]);
        } else if (mapArr[i][j] === 2)
            virus.push([i, j]);
    }
}

// 벽 3개 세우는 모든 조합 찾기
for (let i=0; i<empty.length; i++) {
    for (let j=i+1; j<empty.length; j++) {
        for (let k=j+1; k<empty.length; k++) {
            const tmpArr = JSON.parse(JSON.stringify(mapArr));
            
            tmpArr[empty[i][0]][empty[i][1]] = 1;
            tmpArr[empty[j][0]][empty[j][1]] = 1;
            tmpArr[empty[k][0]][empty[k][1]] = 1;
            
            // bfs 탐색 - 바이러스 확잔 BFS logic
            const bfs = () => {
                const tmpVirus = JSON.parse(JSON.stringify(virus));                
                let virusCnt = 0;
                while (tmpVirus.length) {
                    const [curX, curY] = tmpVirus.shift();
                    
                    for (let l=0; l<4; l++) {
                        let nx = curX + dir[l][0];
                        let ny = curY + dir[l][1];
                        
                        if (nx>=0 && ny>=0 && nx<n && ny<m && !tmpArr[nx][ny]) {
                            tmpArr[nx][ny] = 2;
                            virusCnt++;
                            tmpVirus.push([nx, ny]);
                        }
                    }
                }
                safeArea.push(empty.length-virusCnt-3);
            }
            bfs();
        }
    }
}

console.log(Math.max(...safeArea));


