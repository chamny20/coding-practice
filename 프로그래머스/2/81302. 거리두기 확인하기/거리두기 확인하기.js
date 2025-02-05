function solution(places) {
    var answer = [];
    const dir = [[1, 0], [-1, 0], [0, -1], [0, 1]];
    
    const bfs = (start, maps) => {
        const [curX, curY] = start;
        
        for (let i=0; i<dir.length; i++) {
                const nx = curX + dir[i][0];
                const ny = curY + dir[i][1];
                
                if (nx>=0 && ny>=0 && nx<5 && ny<5) {
                    if (maps[nx][ny] === 'P') return false;
                    else if (maps[nx][ny] === 'O') {
                        for (let j=0; j<dir.length; j++) {
                            const nnx = nx + dir[j][0];
                            const nny = ny + dir[j][1];
                            
                            if (nnx>=0 && nny>=0 && nnx<5 && nny<5) {
                                if (nnx !== curX || nny !== curY) {
                                    if (maps[nnx][nny] === 'P')
                                        return false;
                                }
                            }
                        }
                    }
                }
            }
        return true;
    }
    
    
    places.forEach((room, idx) => {
        let roomMaps = [];
        room.map((line) => {
            roomMaps.push(line.split(''));
        });
        let result = 1;
        // console.log(roomMaps);
        // 'P'의 위치 수집
        for (let i=0; i<5; i++) {
            for (let j=0; j<5; j++) {
                if (roomMaps[i][j] === 'P') {
                    if (!bfs([i, j], roomMaps)) {
                        result = 0;
                        break;
                    }
                }
            }
        }
        answer.push(result);
    });
    
    return answer;
}