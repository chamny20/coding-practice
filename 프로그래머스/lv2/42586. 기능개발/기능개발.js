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

/* 

남은 progresses를 먼저 정하기.
next
며칠 동안 가능한지 day 수 정하기.
next
만약 [7,3,9]에서
0번째값 > 1번째값 이면 cnt++(기능개수);
if문 비교필요
*/