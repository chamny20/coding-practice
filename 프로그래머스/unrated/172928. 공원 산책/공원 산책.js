function solution(park, routes) {
    var prevPos = [0,0];
    
    const dict = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    }
    
    let parkMap = [];
    park.forEach((row, idx)=> {
        let startPos = row.indexOf('S');
        // console.log("startPos:", startPos);
        if(startPos>=0) {
            prevPos=[idx, startPos];
        }
        // console.log("prevPos:", prevPos);
        parkMap.push([...row]);
    })
    // console.log(parkMap);
    
    for (let i=0; i<routes.length; i++) {
        let [way, cnt] = routes[i].split(" ");
        console.log(way, cnt);
        let curPos = [...prevPos];
        let flag = true;
        // console.log(curPos);
        for (let j=0; j<cnt; j++) {
            curPos[0] += dict[way][0];
            curPos[1] += dict[way][1];
            
            if(curPos[0]>parkMap.length-1 || curPos[0]<0 || curPos[1]>parkMap[0].length-1 || curPos[1]<0) {
                flag = false;
                break;
            }
            console.log(curPos);
            console.log("here:",parkMap[curPos[0]][curPos[1]]);
            if(parkMap[curPos[0]][curPos[1]] == 'X') {
                flag = false;
                break;
            }
        }
        if (flag) {
            prevPos = curPos;
        }
    }
    
    return prevPos;
}