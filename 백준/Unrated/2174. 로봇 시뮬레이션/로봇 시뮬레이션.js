const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [A, B] = input.shift().split(' ').map(Number); // A 가로, B 세로
const [n, m] = input.shift().split(' ').map(Number);

// 방향 정의
const dirs = ['N', 'E', 'S', 'W'];
const dirInfo = {
  N: [-1, 0], // 위
  E: [0, 1],  // 오른쪽
  S: [1, 0],  // 아래
  W: [0, -1], // 왼쪽
};

let robots = {}; // 로봇 정보
const board = Array.from({ length: B }, () => Array(A).fill(0));

// 로봇 초기 위치 입력
for (let i = 1; i <= n; i++) {
    const [xStr, yStr, dir] = input.shift().split(' ');
    const x = Number(xStr);
    const y = Number(yStr);

    const rowIdx = B - y;  // 0~B-1, row 방향
    const colIdx = x - 1;  // 0~A-1, col 방향

    robots[i] = { x: rowIdx, y: colIdx, dir };
    board[rowIdx][colIdx] = i;
}

let result = 'OK';

// 명령 실행
for (let i = 0; i < m; i++) {
    const [numStr, cmd, cntStr] = input.shift().split(' ');
    const num = Number(numStr);
    const cnt = Number(cntStr);

    if (result !== 'OK') break;

    const { x, y, dir } = robots[num];
    let nx = x;
    let ny = y;
    let ndir = dir;

    if (cmd === 'L' || cmd === 'R') {
        const curIdx = dirs.indexOf(dir);
        const turn = cmd === 'L' ? -1 : 1;
        // 충분히 큰 수 더해서 음수 모듈러 방지
        const nextIdx = (curIdx + turn * cnt + 1000) % 4;
        ndir = dirs[nextIdx];
        robots[num].dir = ndir;
    } else if (cmd === 'F') {
        for (let t = 0; t < cnt; t++) {
            nx += dirInfo[ndir][0];
            ny += dirInfo[ndir][1];

            // 벽 충돌 체크
            if (nx < 0 || nx >= B || ny < 0 || ny >= A) {
                result = `Robot ${num} crashes into the wall`;
                break;
            }

            // 로봇 충돌 체크
            if (board[nx][ny] !== 0) {
                result = `Robot ${num} crashes into robot ${board[nx][ny]}`;
                break;
            }
        }

        // 이동 완료 후 보드 업데이트
        if (result === 'OK') {
            board[x][y] = 0;
            board[nx][ny] = num;
            robots[num].x = nx;
            robots[num].y = ny;
        }
    }
}

console.log(result);
