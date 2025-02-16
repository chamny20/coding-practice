const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [f, s, g, u, d] = input.shift().split(' ').map(Number);
const visited = Array(f+1).fill(false);

const bfs = (start, end) => {
    const queue = [[start, 0]];
    visited[start] = true;
    
    while (queue.length) {
        const [cur, t] = queue.shift();
        
        if (cur === end) return t;
        
        for (const nx of [cur + u, cur - d]) {
            if (!visited[nx] && nx>=1 && nx<=f) {
                queue.push([nx, t+1]);
                visited[nx] = true;
            }
        }
    }
    return "use the stairs";
}

console.log(bfs(s, g));