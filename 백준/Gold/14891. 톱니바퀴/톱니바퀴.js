const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const A = input.shift().split('').map(Number);
const B = input.shift().split('').map(Number);
const C = input.shift().split('').map(Number);
const D = input.shift().split('').map(Number);

const gears = [A, B, C, D];

const k = Number(input.shift());

const rotate = (arr, dir) => {
    // 시계방향
    if (dir === 1) { 
        arr.unshift(arr.pop());
    } else if (dir === -1) {
        arr.push(arr.shift());
    }
    return arr;
}

for (let i=0; i<k; i++) {
    const [num, dir] = input[i].split(' ').map(Number);
    const n = num - 1;
    const direction = [0, 0, 0, 0];
    direction[n] = dir;
    
    for (let a=n; a>0; a--) {
        if (gears[a-1][2] !== gears[a][6])
            direction[a-1] = direction[a] * (-1);
        else 
            break;
    }
            
    for (let b=n; b<3; b++) {
        if (gears[b][2] !== gears[b+1][6]) {
            direction[b+1] = direction[b] * (-1);
        } else
            break;
    }
    
    for (let c=0; c<4; c++) {
        if (direction[c]!==0) {
            rotate(gears[c], direction[c]);
        }
    }
}

// 점수계산
const getScore = (A, B, C, D) => {
    let score = 0;

    if (A[0] === 1) score++;
    if (B[0] === 1) score += 2;
    if (C[0] === 1) score += 4;
    if (D[0] === 1) score += 8;
    
    return score;
}

const ans = getScore(gears[0], gears[1], gears[2], gears[3]);
console.log(ans);