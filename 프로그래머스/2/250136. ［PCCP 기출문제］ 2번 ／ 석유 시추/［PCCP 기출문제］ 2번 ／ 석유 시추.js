function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = Array.from(Array(n), () => Array(m).fill(0));
    const oilMap = new Map();
    let idx = 1; // 석유 그룹 번호
    
    // 일단 석유 영역 구해야 함 (ex. 8, 7, 2)
    const bfs = (start) => {
        const queue = [start];
        const [x, y] = start;
        let cnt = 1;
        const list = [start];
        visited[x][y] = idx; // 방문 체크와 동시에 그룹 번호 할당
        
        while (queue.length) {
            const [curX, curY] = queue.shift();
            
            for (let i=0; i<dir.length; i++) {
                const nx = curX + dir[i][0];
                const ny = curY + dir[i][1];
                
                if (nx>=0 && ny>=0 && nx<n && ny<m && !visited[nx][ny] && land[nx][ny]) {
                    cnt++;
                    queue.push([nx, ny]);
                    visited[nx][ny] = idx;
                    list.push([nx, ny]);
                }
            }
        }
        
        oilMap.set(idx, cnt);
        idx++;        
    }
    
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (!visited[i][j] && land[i][j]) {
                bfs([i, j]);
            }
        }
    }
    
    var max = 0;
    
    // 가장 많은 석유를 뽑을 수 있는 시추관의 위치 찾기
    // console.log('visited', visited);
    // console.log(oilMap);
    for (let y=0; y<m; y++) {
        let oilSet = new Set(); // 같은 그룹을 중복 계산 방지
        
        for (let x=0; x<n; x++) {
            if (visited[x][y])
                oilSet.add(visited[x][y]);
        }
        let result = [...oilSet].reduce((sum, key) => sum + oilMap.get(key), 0);
        // console.log('oilset', oilSet);
        // console.log(result);
        max = Math.max(max, result);
    }
    
    
    
    return max;
}