const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const mapArr = input.map((v) => v.split(" ").map(Number));
const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
let maxVal = 0;

// mapArr에서 최댓값 구하기
for (let i = 0; i < mapArr.length; i++) {
    for (let j = 0; j < mapArr[i].length; j++) {
        if (mapArr[i][j] > maxVal) {
            maxVal = mapArr[i][j];
        }
    }
}

// BFS 함수
const bfs = (x, y, rainHeight, visited) => {
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length) {
        const [curX, curY] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];

            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < n &&
                ny < n &&
                !visited[nx][ny] &&
                mapArr[nx][ny] > rainHeight // 물에 잠기지 않은 곳만 탐색
            ) {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
};

let maxSafeAreas = 0;

// 비의 높이를 0부터 maxVal까지 변경하며 탐색
for (let rainHeight = 0; rainHeight <= maxVal; rainHeight++) {
    const visited = Array.from(Array(n), () => Array(n).fill(false));
    let safeAreas = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && mapArr[i][j] > rainHeight) { // 물에 잠기지 않은 곳
                bfs(i, j, rainHeight, visited);
                safeAreas++;
            }
        }
    }

    maxSafeAreas = Math.max(maxSafeAreas, safeAreas);
}

console.log(maxSafeAreas);
