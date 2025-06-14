function solution(routes) {
    let ans = 1;
    routes.sort((a, b) => a[1] - b[1]);
    let cameraPoint = routes[0][1];
    
    for (let i=0; i<routes.length; i++) {
        let [start, end] = routes[i];
        
        if (cameraPoint < start) {
            cameraPoint = end;
            ans++;
        }
    }
    
    return ans;
}