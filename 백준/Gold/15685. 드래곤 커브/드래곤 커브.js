const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const maps = Array.from(Array(101), () => Array(101).fill(false));
const dirs = {
    0: [1, 0],
    1: [0, -1],
    2: [-1, 0],
    3: [0, 1],
};

function dragonCurve(x, y, d, g) {
    const dirList = [d];
    
    for (let i=0; i<g; i++) {
        for (let j=dirList.length-1; j>=0; j--) {
            dirList.push((dirList[j] + 1) % 4);
        }
    }
    
    maps[y][x] = true;
    
    // 방향따라 이동해서 방문
    for (const dir of dirList) {
        const [nx, ny] = dirs[dir];
        x += nx;
        y += ny;
        maps[y][x] = true;
    }
}

for (let i=0; i<n; i++) {
    const [x, y, d, g] = input[i].split(' ').map(Number);
    dragonCurve(x, y, d, g);
}


// 정사각형 개수 (점만 있으면 됨)
let ans = 0;

for (let x=0; x<100; x++) {
    for (let y=0; y<100; y++) {
        if (maps[y][x] && maps[y+1][x] && maps[y][x+1] && maps[y+1][x+1])
            ans++;
    }
}

console.log(ans);