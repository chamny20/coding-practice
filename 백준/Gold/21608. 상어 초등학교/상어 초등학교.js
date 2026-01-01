const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const maps = Array.from(Array(n), () => Array(n).fill(0)); // 자리배치배열
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]; 
// 인접기준
// (r1, c1) (r2, c2) => |r1-r2| + |c1-c2| = 1 만족

let info = {};

for (let idx=0; idx<n*n; idx++) {
    const [curStudent, ...likes] = input[idx].split(' ').map(Number);
    info[curStudent] = likes;
    
    const list = []; 
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (!maps[i][j]) {
                let likeCnt = 0;
                let emptyCnt = 0;
                
                for (let k=0; k<dirs.length; k++) {
                    const nx = i + dirs[k][0];
                    const ny = j + dirs[k][1];
                    
                    if (nx>=0 && nx<n && ny>=0 && ny<n) {
                        if (likes.includes(maps[nx][ny])) likeCnt++;
                        else if (!maps[nx][ny]) emptyCnt++;
                    }
                }
                list.push([i, j, likeCnt, emptyCnt]);
            }
            
        }
    }
    
    list.sort((a, b) => {
        if (a[2] !== b[2]) return b[2] - a[2];
        else if (a[3] !== b[3]) return b[3] - a[3];
        else if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });
    // 최적 후보 선택
    const [r, c] = list[0];
    maps[r][c] = curStudent;
}


// 만족도 계산
let sum = 0;

for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        const num = maps[i][j];
        const likes = info[num];
        let cnt = 0;
        
        for (let k=0; k<dirs.length; k++) {
            const nx = i + dirs[k][0];
            const ny = j + dirs[k][1];
            
            if (nx>=0 && ny>=0 && nx<n && ny<n) {
                if (likes.includes(maps[nx][ny])) {
                    cnt++;
                }
            }
        }
        if (cnt === 1) sum += 1;
        else if (cnt === 2) sum += 10;
        else if (cnt === 3) sum += 100;
        else if (cnt === 4) sum += 1000;
    }
}

console.log(sum);