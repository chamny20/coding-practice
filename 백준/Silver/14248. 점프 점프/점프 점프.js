const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
const s = Number(input.shift());
const visited = Array(n).fill(false);
const startIdx = s - 1;

const bfs = (start) => {
    const queue = [start];
    visited[start] = true;
    let cnt = 1;
    
    while (queue.length) {
        const cur = queue.shift();
        const jumpDistance = arr[cur];
        
        // left
        const left = cur - jumpDistance;
        if (left >= 0 && !visited[left]) {
            queue.push(left);
            visited[left] = true;
            cnt++;
        }
        // right
        const right = cur + jumpDistance;
        if (right < n && !visited[right]) {
            queue.push(right);
            visited[right] = true;
            cnt++;
        }
    }
    
    return cnt;
}


console.log(bfs(startIdx));