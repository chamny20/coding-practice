function solution(maps) {
    var answer = 0;
    // let mapArr = new Array(maps.length).fill([]);
    
//     maps.forEach((item, idx) => {
//         mapArr[idx] = item.split("");
//     })
    
//     console.log(mapArr)
//     return answer;
    
    function BFS(start, arr, target) {
        let time = 0;
        let tranX = [-1, 1, 0, 0];
        let tranY = [0, 0, -1, 1];
        arr[start[0]][start[1]] = 'X';
        
        let queue = [start];
        
        while(queue.length > 0) {
            const len = queue.length;
            for (let i=0; i<len; i++) {
                let [x, y] = queue.shift();
                
                for (let k=0; k<4; k++) {
                    let nx = x + tranX[k];
                    let ny = y + tranY[k];
                    
                     // 유효한 좌표인지 확인
                    if (nx >= 0 && ny >= 0 && nx < arr.length && ny < arr[0].length && arr[nx][ny]!=='X') {
                        if(target === arr[nx][ny])
                            return time+1;
                        
                        queue.push([nx, ny]);
                        arr[nx][ny] = 'X';
                    }
                }
                
               
            }
            time++;
        }
        return -1;
    }
    
    var maps1 = maps.map((el) => el.split(""));
    var maps2 = maps.map((el) => el.split(""));
    let lCord, sCord;
    
    for (let x = 0; x<maps.length; x++) {
        for (let y = 0; y<maps[0].length; y++) {
            if(maps[x][y] === 'L') 
                lCord = [x, y];
            
            if(maps[x][y] === 'S') 
                sCord = [x, y];
        }
    }
    
    let a = BFS(sCord, [...maps1], 'L');
    // console.log(a)
    let b = BFS(lCord, [...maps2], 'E');
    
    if (a===-1 || b===-1) return -1;
    return a+b;
}

/*
S O O O L
X X X X O
O O O O O
O X X X X
O O O O E
=> 반드시 L을 거쳐야 함

*/