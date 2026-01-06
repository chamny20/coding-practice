const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i=0; i<m; i++) {
    const [a, b, c] = input[i].split(' ').map(Number);
    graph[a].push([b, c]);
    graph[b].push([a, c]);
}

const dist = Array(n+1).fill(Infinity);
dist[1] = 0;

const pq = [[1, 0]];

while (pq.length) {
    // pq.sort((a, b) => a[1] - b[1]); // 비용 싼 순서대로 매번 정렬-> 시간초과

    let minIdx = 0;
    let minDist = pq[0][1];

    // 선형 탐색으로 최소 cost 찾기
    for (let i = 1; i < pq.length; i++) {
        if (pq[i][1] < minDist) {
            minDist = pq[i][1];
            minIdx = i;
        }
    }
    
    
    const [cur, cost] = pq[minIdx];
    pq.splice(minIdx, 1);
    
    if (cost > dist[cur]) continue;
    
    
    for (const [next, nextCost] of graph[cur]) {
        const newCost = cost + nextCost;
        if (newCost < dist[next]) {
            pq.push([next, newCost]);
            dist[next] = newCost;
        }
    }
    
}

console.log(dist[n]);