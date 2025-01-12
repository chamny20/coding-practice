const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const maps = input.map((line) => line.split(' ').map(Number));
const emptyArr = [];

for (let x=0; x<9; x++) {
    for (let y=0 ;y<9; y++) {
        if (maps[x][y] === 0)
            emptyArr.push([x, y]);
    }
}

const isValid = (row, col, num) => {
    // 행과 열 검사
    for (let i=0; i<9; i++) {
        if (maps[row][i] === num || maps[i][col] === num) 
            return false;
    }
    
    // 작은 격자 검사
    const smRow = Math.floor(row / 3) * 3;
    const smCol = Math.floor(col / 3) * 3;
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (maps[smRow+i][smCol+j] === num)
                return false;
        }
    }
    return true;
}

let ans = '';

const dfs = (dep) => {
    if (dep === emptyArr.length) {
        ans = maps.map(row => row.join(' ')).join('\n');
        return;
    }
    
    const [row, col] = emptyArr[dep];
        
    for (let i=1; i<=9; i++) {
        if (isValid(row, col, i)) {
             maps[row][col] = i;
             dfs(dep + 1);
             maps[row][col] = 0;
        }
    }
}

dfs(0);
console.log(ans);