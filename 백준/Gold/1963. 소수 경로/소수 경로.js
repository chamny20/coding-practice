const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const t = Number(input.shift());
// 비밀번호를 한 번에 한 자리 밖에 못 바꾼다.

const replaceNum = (cur, index, next) => {
    return cur.slice(0, index) + String(next) + cur.slice(index+1);
}

const bfs = (start, target, visited, changed) => {
    const queue = [start];
    changed[start] = 0;
    visited[start] = true;
    
    while (queue.length) {
        const curNum = queue.shift();
        
        for (let idx=0; idx<4; idx++) {
            for (let num=0; num<10; num++) {
                const nextNum = Number(replaceNum(String(curNum), idx, num));
                
                // 다음 번호가 네 자리 범위를 벗어나거나, 방문한 번호이거나, 소수가 아니면 패스
                if (nextNum < 1000 || nextNum > 9999 || visited[nextNum] || !isPrime(nextNum)) continue;
            
                visited[nextNum] = true;
                changed[nextNum] = changed[curNum] + 1;
                queue.push(nextNum);
                
                if (target === nextNum) return;
            }
        }
        
    }
    
}

const isPrime = (num) => {
    if (num < 2) return false;

    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i=0; i<t; i++) {
    const [now, tobe] = input.shift().split(' ').map(Number);
    const visited = Array(10000).fill(false); // 방문을 표시할 배열
    const changed = Array(10000).fill(-1); // 비밀번호 변경 횟수를 표시할 배열 (초기값: -1)
    bfs(now, tobe, visited, changed);
    
    console.log(changed[tobe] === -1 ? 'Impossible' : changed[tobe]);
}