const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b, n, m] = input.shift().split(' ').map(Number);
// +1, -1, A배, B배
// const dir = [+a, -a, +b, -b, a, b];

const bfs = () => {
    const queue = [[n, 0]]; // counting
    const visited = Array(100001).fill(false);
    visited[n] = true;
    
    while (queue.length) {
        const [cur, cnt] = queue.shift();
        
        if (cur === m) return cnt;
        
        const nextPos = [
            cur + 1,
            cur - 1,
            cur + a,
            cur - a,
            cur + b,
            cur - b,
            cur * a,
            cur * b
        ];
        
        for (const next of nextPos) {
            if (!visited[next] && next>=0 && next<=100000) {
                visited[next] = true;
                queue.push([next, cnt + 1]);
            }
        }
    }
    
    return -1;
}

console.log(bfs());