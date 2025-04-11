const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const maps = [];
for (let i=0; i<5; i++) {
    const list = input.shift().split(' ').map(Number);
    maps.push(list);
}

const arr = input.map(list => list.split(' ').map(Number)).flat();

// 빙고인지 확인하기
const isCross = (board) => {
    let cnt = 0;
    if (!board[0][0] &&
       !board[1][1] &&
       !board[2][2] &&
       !board[3][3] &&
       !board[4][4]) {
        cnt++;
    }
    if (!board[0][4] &&
       !board[1][3] &&
       !board[2][2] &&
       !board[3][1] &&
       !board[4][0]) {
        cnt++;
    }
    return cnt;
}

const isLine = (board) => {
    let cnt = 0;
    for (let i=0; i<5; i++) {
        if (!board[i][0] &&
           !board[i][1] &&
           !board[i][2] &&
           !board[i][3] &&
           !board[i][4]) {
            cnt++;
        }
        if (!board[0][i] &&
           !board[1][i] &&
           !board[2][i] &&
           !board[3][i] &&
           !board[4][i]) {
            cnt++;
        }
    }
    return cnt;
}

let ans = 0;

for (let i=0; i<25; i++) {
    const num = arr[i];
    
    for (let x=0; x<5; x++) {
        for (let y=0; y<5; y++) {
            if (maps[x][y] === num) {
                maps[x][y] = 0;
            }
        }
    }
    
    ans++;
    const crossCnt = isCross(maps);
    const lineCnt = isLine(maps);
    
    if (crossCnt + lineCnt >= 3) {
        console.log(ans);
        break;
    }
}


