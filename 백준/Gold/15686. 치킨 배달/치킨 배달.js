const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
// 폐업시키지 않을 치킨집은 m개
const maps = input.map((line) => line.split(' ').map(Number));
const homeArr = [];
const chickenArr = [];
let ans = Infinity;

for (let x=0; x<n; x++) {
    for (let y=0; y<n; y++) {
        if (maps[x][y] === 1) {
            homeArr.push([x, y]);
        } else if (maps[x][y] === 2) {
            chickenArr.push([x, y]);
        }
    }
}

let visited = Array(chickenArr.length).fill(false);

const dfs = (idx, cnt) => {
    if (cnt === m) {
        let totalDistance = 0;
        for (const [hx, hy] of homeArr) {
            let minDistance = Infinity;
            
            for (let i=0; i<chickenArr.length; i++) {
                if (visited[i]) {
                    const [cx, cy] = chickenArr[i];
                    const dis = Math.abs(cx-hx) + Math.abs(cy-hy);
                    
                    minDistance = Math.min(dis, minDistance);
                }
            }
            totalDistance += minDistance;
        }
        ans = Math.min(ans, totalDistance);
        return;
    }
    
    for (let i=idx; i<chickenArr.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(i+1, cnt+1);
            visited[i] = false;
        }
    }
}

dfs(0, 0);
console.log(ans);
