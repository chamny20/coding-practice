function solution(targets) {
    var answer = 1;
    // 모든 폭격 미사일 요격 위해 필요한 요격 미사일 수의 최솟값
    targets.sort((a, b) => b[0] - a[0]);
    console.log(targets);
    
    let checkPoint = targets[0][0];
    
    for (let i=1; i<targets.length; i++) {
        const [start, end] = targets[i];
        
        if (end <= checkPoint) {
            answer++;
            checkPoint = start;
        }
    }

    
    
    return answer;
}