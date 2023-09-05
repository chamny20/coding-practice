function solution(progresses, speeds) {
    var answer = [];
    let restDay = [];
    let funcCnt = 1;
    
    progresses.forEach((progress, idx) => {
        restDay.push(Math.ceil((100-progress) / speeds[idx]));
    })
    
    let maxDay = restDay[0];
    
    for (let i=1; i<restDay.length; i++) {
        if(restDay[i]>maxDay) {
            maxDay = restDay[i];
            answer.push(funcCnt);
            funcCnt = 1;
        } else {
            funcCnt++;            
        }
    }
    answer.push(funcCnt);
    return answer;
}