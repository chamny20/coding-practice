const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const maps = input.map(line => line.split('').map(Number));

const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const visited = Array.from(Array(n), () => Array(n).fill(Infinity));

const bfs = () => {
    const queue = [];
    queue.push([0, 0]);
    visited[0][0] = 0; // 시작점은 벽을 부수지 않음

    while (queue.length) {
        const [curX, curY] = queue.shift();

        for (let i = 0; i < dir.length; i++) {
            const nx = curX + dir[i][0];
            const ny = curY + dir[i][1];

            if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
                const newCost = visited[curX][curY] + (maps[nx][ny] === 0 ? 1 : 0);

                if (newCost < visited[nx][ny]) {
                    visited[nx][ny] = newCost;

                    if (maps[nx][ny] === 1) {
                        queue.unshift([nx, ny]); // 흰 방 → 우선순위 높음
                    } else {
                        queue.push([nx, ny]); // 검은 방 → 우선순위 낮음
                    }
                }
            }
        }
    }

    return visited[n - 1][n - 1];
};

console.log(bfs());
