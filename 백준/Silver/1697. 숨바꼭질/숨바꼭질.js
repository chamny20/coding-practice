const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, k] = input.shift().split(' ').map(Number);
const visited = Array(100001).fill(false);

const bfs = (start, end) => {
    const queue = [[start, 0]];
    visited[start] = true;
    
    while (queue.length) {
        const [cur, time] = queue.shift();
        if (cur === end) return time;
        
        for (const d of [cur + 1, cur * 2, cur - 1]) {
            if (!visited[d] && d >= 0 && d < visited.length) {
                queue.push([d, time + 1]);
                visited[d] = true;
            }
        }
    } 
}

console.log(bfs(n, k));