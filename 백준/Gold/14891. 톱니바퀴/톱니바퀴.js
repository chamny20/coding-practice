const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const A = input.shift().split('').map(Number);
const B = input.shift().split('').map(Number);
const C = input.shift().split('').map(Number);
const D = input.shift().split('').map(Number);

const gears = [A, B, C, D]; // 4개의 톱니 저장

// 회전방향대로 변경하는 함수
const rotateGear = (arr, dir) => {
    if (dir === 1) {
        const popItem = arr.pop();
        arr.unshift(popItem);
    } else if (dir === -1) {
        const shiftItem = arr.shift();
        arr.push(shiftItem);
    }
}


const k = Number(input.shift()); // 회전 횟수
for (let t=0; t<k; t++) {
    const [idx, direction] = input[t].split(' ').map(Number);
    // A[2]랑B[6] - B[2]랑C[6] - C[2]랑 D[6]
    const dirs = [0, 0, 0, 0];
    dirs[idx - 1] = direction;
    
    // left
    for (let i=idx-1; i>0; i--) {
        if (gears[i][6] !== gears[i-1][2]) {
            dirs[i-1] = -dirs[i];
        } else 
            break;
    }
    
    // right
    for (let i=idx-1; i<3; i++) {
        if (gears[i][2] !== gears[i+1][6]) {
            dirs[i+1] = -dirs[i];
        } else
            break;
    }
   
    // rotate
    for (let i=0; i<4; i++) {
        if (dirs[i] !== 0) 
            rotateGear(gears[i], dirs[i]);
    }
}




// 점수계산
function calFunc(A, B, C, D) {
    let ans = 0;
    
    ans += (A[0] === 0 ? 0 : 1);
    ans += (B[0] === 0 ? 0 : 2);
    ans += (C[0] === 0 ? 0 : 4);
    ans += (D[0] === 0 ? 0 : 8);
    
    return ans;
}

const res = calFunc(gears[0], gears[1], gears[2], gears[3]);
console.log(res);
