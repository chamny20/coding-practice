const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, k] = input.shift().split(' ').map(Number);
const board = [];

const direction = {
    1: [0, 1],
    2: [0, -1],
    3: [-1, 0],
    4: [1, 0]
}

for (let i=0; i<n; i++) {
    board.push(input.shift().split(' ').map(Number));
}

//const stackBoard = Array.from(Array(n), () => Array(n).fill([]));
const stackBoard = Array.from({length:n}, () => Array.from({length:n}, () => []));
const horses = [];
for (let i=0; i<k; i++) {
    const [r, c, dir] = input[i].split(' ').map(Number);
    const row = r - 1;
    const col = c - 1;
    horses.push([row, col, dir]);
    stackBoard[row][col].push(i); // 말번호쌓기
}

function reverseDir(dir) {
    if (dir === 1) return 2;
    if (dir === 2) return 1;
    if (dir === 3) return 4;
    if (dir === 4) return 3;
}

for (let turn=1; turn<=1000; turn++) {
    for (let i=0; i<k; i++) { // 0..1..2..3
        let [row, col, dir] = horses[i];
        const stack = stackBoard[row][col];
        const idx = stack.indexOf(i);
        const movingStack = stack.splice(idx); // 위쪽 말 모두 빼기
        
        let [dx, dy] = direction[dir]; // [x, y]
        let nextRow = row + dx;
        let nextCol = col + dy;
        
        // 방향바꾸는 조건일때
        if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >=n || board[nextRow][nextCol] === 2) {
            const newDir = reverseDir(dir);
            horses[i][2] = newDir;
        
            dx = direction[newDir][0];
            dy = direction[newDir][1];
        
            nextRow = row + dx;
            nextCol = col + dy;
        
            // 여전히 파란 칸이거나 조건
            if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || board[nextRow][nextCol] === 2) {
                stackBoard[row][col].push(...movingStack); // 다시넣기
                continue; // 이동안하기
            }
        }
        
        // 색상 체크
        if (board[nextRow][nextCol] === 0) { //white
            stackBoard[nextRow][nextCol].push(...movingStack);
        } else if (board[nextRow][nextCol] === 1) { //red
            movingStack.reverse();
            stackBoard[nextRow][nextCol].push(...movingStack);
        }
        
        // 말 위치 업데이트
        for (const num of movingStack) {
            horses[num][0] = nextRow;
            horses[num][1] = nextCol;
        }
        
        if (stackBoard[nextRow][nextCol].length >= 4) {
            console.log(turn);
            process.exit(0);
        }

    }
}
console.log(-1);