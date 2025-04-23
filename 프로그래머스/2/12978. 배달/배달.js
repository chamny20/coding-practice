function solution(N, road, K) {
    const obj = {};
    
    road.forEach((list) => {
        const [a, b, time] = list;
        obj[a] = obj[a] || [];
        obj[b] = obj[b] || [];
        obj[a].push([b, time]);
        obj[b].push([a, time]);
    });
    console.log(obj);
    
    const dist = Array(N + 1).fill(Infinity); // 최단시간 담을..
    dist[1] = 0;
    
    const queue = [[1, 0]];
    while (queue.length) {
        const [cur, time] = queue.shift();
        
        for (const [next, nextTime] of obj[cur]) {
            if (dist[next] > time + nextTime) {
                dist[next] = time + nextTime;
                queue.push([next, dist[next]]);
            }
        }
        queue.sort((a, b) => a[1] - b[1]);
    }
    
    return dist.filter(el => el <= K).length;
}