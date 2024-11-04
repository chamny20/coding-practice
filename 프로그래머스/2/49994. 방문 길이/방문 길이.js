function solution(dirs) {
    let ans = 0;
    let visited = new Set();
    let dir = [0, 0];
    
    for (let i=0; i<dirs.length; i++) {
        let prev = [...dir];
        
        switch (dirs[i]) {
            case 'U':
                dir[1] += 1;
                break;
            case 'D':
                dir[1] -= 1;
                break;   
            case 'R':
                dir[0] += 1;
                break;
            case 'L':
                dir[0] -= 1;
                break;
        }
        if (dir[0] < -5 || dir[0] > 5 || dir[1] < -5 || dir[1] > 5) {
            dir = [...prev];
            continue;
        }
        
        let path1 = `${prev[0]},${prev[1]} -> ${dir[0]},${dir[1]}`;
        let path2 = `${dir[0]},${dir[1]} -> ${prev[0]},${prev[1]}`;
        
        visited.add(path1);
        visited.add(path2);

    }
    // console.log(visited);
    ans = visited.size / 2;

    
    
    return ans;
}







