const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [R, C] = input.shift().split(' ').map(Number);
const maps = input.map(line => line.split(''));
const fireTime = Array.from(Array(R), () => Array(C).fill(-1));

// J 포지션 찾기
const getStartPos = (arr) => {
    let sPos = [0, 0];
    for (let i=0; i<R; i++) {
        for (let j=0; j<C; j++) {
            if (arr[i][j] === 'J')
                sPos = [i, j];
        }
    }
    return sPos;
}


const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
let time = 0;

const jBFS = (maps) => {
    const [x, y] = getStartPos(maps);
    const queue = [[x, y, 0]];
    const visitedJ = Array.from(Array(R), () => Array(C).fill(false));
    visitedJ[x][y] = true;
    if (fireTime[x][y] === 0) {
        console.log('IMPOSSIBLE');
        return;
    }
    
    while (queue.length) {
        const [jx, jy, jt] = queue.shift();
        
        for (let i=0; i<dirs.length; i++) {
            const nx = jx + dirs[i][0];
            const ny = jy + dirs[i][1];
            const nextTime = jt + 1;
            
            if (nx<0 || ny<0 || nx>=R || ny>=C) {
                console.log(nextTime);
                return;
            }
            
            if (!visitedJ[nx][ny] && maps[nx][ny] !== 'F' && maps[nx][ny] !== '#') {
                if (fireTime[nx][ny] !== -1 && fireTime[nx][ny]<=nextTime) continue;
                
                visitedJ[nx][ny] = true;
                queue.push([nx, ny, nextTime]);
                    
            }
        }
    }
    
    console.log('IMPOSSIBLE');
    return;
}


const fireBFS = (arr) => {
    const visitedFire = Array.from(Array(R), () => Array(C).fill(false));

    const queue = [];
    
    for (let i=0; i<R; i++) {
        for (let j=0; j<C; j++) {
            if (arr[i][j] === 'F') {
                queue.push([i, j, 0]);
                visitedFire[i][j] = true;
                fireTime[i][j] = 0;
            }
        }
    }
        
    while (queue.length) {
        const [curX, curY, curT] = queue.shift();
        
        for (let i=0; i<dirs.length; i++) {
            const nx = curX + dirs[i][0];
            const ny = curY + dirs[i][1];
            const nextT = curT + 1;
            
            if (nx>=0 && ny>=0 && nx<R && ny<C && !visitedFire[nx][ny] && arr[nx][ny] !== '#') {
                    visitedFire[nx][ny] = true;
                    queue.push([nx, ny, nextT]);
                    fireTime[nx][ny] = nextT;
                
            }
        }
    }
    
}


// logic

fireBFS(maps);
jBFS(maps);


//console.log(time);