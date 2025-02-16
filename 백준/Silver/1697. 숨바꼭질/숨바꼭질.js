const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, k] = input.shift().split(' ').map(Number);
const visited = Array(100001).fill(false);

const bfs = (start, end) => {
    const queue = [[start, 0]];
    visited[start] = true;
    
    while (queue.length) {
        const [cur, t] = queue.shift();
        if (cur === end) return t;
        
        for (const nx of [cur-1, cur+1, cur*2]) {
            if (!visited[nx] && nx>=0 && nx< visited.length) {
                queue.push([nx, t + 1]);
                visited[nx] = true;
            }
        }
    }
}

console.log(bfs(n, k));