const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const k = Number(input.shift());
let maps = Array.from(Array(n), () => Array(n).fill(0));
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 오른쪽, 아래, 왼쪽, 위

for (let i=0; i<k; i++) {
    const [a, b] = input.shift().split(' ').map(Number);
    maps[a-1][b-1] = 1; // 사과 위치 
}

const l = Number(input.shift());
const dirInfo = []; // 뱀 방향전환 정보 배열
for (let i=0; i<l; i++) {
    const [x, c] = input.shift().split(' ');
    dirInfo.push([Number(x), c]);
}

let time = 0;
let direction = 0; // 처음 방향 (오른쪽)
const snake = [[0, 0]]; // 현재 뱀의 몸 정보(머리...몸..꼬리) 시작은 한칸
maps[0][0] = 2; // 뱀을 2로 표시
let dirIndex = 0; // dirInfo index

while (true) {
    time++;
    const [headX, headY] = snake[snake.length - 1];
    // 현재 방향 정보
    const [dx, dy] = dir[direction];
    const nx = headX + dx; // 직진
    const ny = headY + dy; // 직진
    
    // 벽 혹은 자기 자신 만나면 안됨
    if (nx<0 || ny<0 || nx>=n || ny>=n || maps[nx][ny] === 2) {
        break;
    }
    
    // 사과 만나면
    if (maps[nx][ny]) {
        maps[nx][ny] = 2;
        snake.push([nx, ny]);
    } else {
        maps[nx][ny] = 2;
        snake.push([nx, ny]);
        const [tx, ty] = snake.shift();
        maps[tx][ty] = 0;
    }
    
   
    // 뱀 방향 전환 정보 하나씩 적용
    if (dirIndex < dirInfo.length && time === dirInfo[dirIndex][0]) {
        if (dirInfo[dirIndex][1] === 'L') {
            direction = (direction + 3) % 4;
        } else {
            direction = (direction + 1) % 4;
        }
        dirIndex++;
    }
    
}

console.log(time);
