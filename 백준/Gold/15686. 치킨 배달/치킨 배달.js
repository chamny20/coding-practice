const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
// 최대 m개 골라야 함
// 반환값은 도시의 치킨 거리의 최솟값
const houses = [];
const chickens = [];
let ans = Infinity;

for (let i=0; i<n; i++) {
    const line = input[i].split(' ').map(Number);
    for (let j=0; j<n; j++) {
        if (line[j] === 1) {
            houses.push([i+1, j+1]);
        } else if (line[j] === 2) {
            chickens.push([i+1, j+1]);
        }
    }
}


const visited = Array(chickens.length).fill(false);

const dfs = (idx, cnt) => {
    if (cnt === m) {
        let totalDistance = 0;
        for (const [hx, hy] of houses) {
            let minDis = Infinity;
            for (let i=0; i<chickens.length; i++) {
                const [cx, cy] = chickens[i];
                if (visited[i]) {
                    const dis = Math.abs(hx-cx) + Math.abs(hy-cy);
                    minDis = Math.min(minDis, dis);
                }
            }
            totalDistance += minDis;

        }
        ans = Math.min(ans, totalDistance);
        return;
    }
    
    for (let i=idx; i<chickens.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(i+1, cnt+1);
            visited[i] = false;
        }
    }
}

dfs(0, 0);

console.log(ans);