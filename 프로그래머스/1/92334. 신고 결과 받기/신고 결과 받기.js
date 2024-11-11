function solution(id_list, report, k) {
    let answer = [];
    let reportedCnt = {};
    let reporterObj = {};

    for (let id of id_list) {
        reporterObj[id] = new Set(); 
    }
    // console.log('here', reporterObj)
    
    for (let i=0; i<report.length; i++) {
        const [a, b] = report[i].split(" ");
        if(!reportedCnt[b]) reportedCnt[b] = 0;
        
        if(!reporterObj[a].has(b)) {
            reporterObj[a].add(b);
            reportedCnt[b] += 1;
        }
        
    }
    // console.log(reporterObj)
    
    for (let id of id_list) {
        let count = 0;
        // console.log('여기', reporterObj[id])
        for (let reported of reporterObj[id]) {
            if (reportedCnt[reported] >= k) {
                count++;
            }
        }
        answer.push(count);
    }
    
    return answer;
}