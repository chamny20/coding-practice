const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const maps = input.map((line) => line.split('').map(Number));
const emptyArr = [];

// 0인 좌표 저장하기
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (maps[i][j] === 0) 
            emptyArr.push([i, j]);
    }
}

const isValid = (row, col, num) => {
    // 행과 열 검사
    for (let i = 0; i < 9; i++) {
        if (maps[i][col] === num || maps[row][i] === num) {
            return false;
        }
    }
    
    const smRow = Math.floor(row / 3) * 3;
    const smCol = Math.floor(col / 3) * 3;
    // 작은 격자 검사
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (maps[smRow + x][smCol + y] === num)
                return false;
        }
    }
    return true;
}

let ans = '';

// DFS로 백트래킹을 진행하면서 가장 작은 값을 찾기
const dfs = (idx) => {
    if (idx === emptyArr.length) {
        ans = maps.map(line => line.join('')).join('\n');
        return true;
    }
    
    const [row, col] = emptyArr[idx];
    
    // 사전식으로 가장 작은 값을 찾아야 하므로 1부터 9까지 확인
    for (let i = 1; i <= 9; i++) {
        if (isValid(row, col, i)) {
            maps[row][col] = i;
            if (dfs(idx + 1)) return true; // 첫 번째 답을 찾으면 바로 종료
            maps[row][col] = 0; // 되돌리기
        }
    }
    return false; // 더 이상 진행할 수 없을 때
}

dfs(0);
console.log(ans);
