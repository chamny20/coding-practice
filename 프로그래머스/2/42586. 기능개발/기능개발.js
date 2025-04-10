function solution(progresses, speeds) {
    let ans = [];
    let remainArr = [];
    
    for (let i=0; i<progresses.length; i++) {
        let remain = Math.ceil((100 - progresses[i] ) / speeds[i]);
        remainArr.push(remain);
    }
    
    let currentMax = remainArr[0]; // 현재 가장 앞에 있는 작업의 배포 기준 일 수
    let cnt = 1;
    
    for (let i = 1; i < remainArr.length; i++) {
        if (remainArr[i] <= currentMax) {
            cnt++;
        } else {
            ans.push(cnt);
            cnt = 1;
            currentMax = remainArr[i]; 
        }
    }
    
    ans.push(cnt);
    
    return ans;
}