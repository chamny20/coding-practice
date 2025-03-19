function solution(routes) {
    var answer = 1;
    routes.sort((a, b) => a[1] - b[1]);
    console.log(routes);
    let checkPoint = routes[0][1];
    
    for (let i=1; i<routes.length; i++) {
        const [start, end] = routes[i];
        
        if (checkPoint < start) {
            answer++;
            checkPoint = end;
        }
    }
    
    return answer;
}