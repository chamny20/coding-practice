function solution(plans) {
    const convertTime = (startTime) => {
        const [h, m] = startTime.split(':').map(Number);
        return h * 60 + m;
    }
    
    // convert Time
    for (let i=0; i<plans.length; i++) {
        let [_, startTime, progressTime] = plans[i];
        plans[i][1] = convertTime(startTime);
        plans[i][2] = Number(progressTime);
    }
    
    plans.sort((a, b) => a[1]- b[1]);
    console.log(plans);
    let curTime = 0;
    var ans = [];
    const stack = [];
    
    for (let i=0; i<plans.length-1; i++) {
        const [type, stTime, pgTime] = plans[i];
        const nextTime = plans[i+1][1];
        // console.log(type, stTime);
        
        // 다음 plans[i+1][1] 시간이 startTime + progressTime보다 작거나 같으면 ok
        if (nextTime >= stTime + pgTime) {
            ans.push(type);
            
            // 남은 시간 동안 stack에 있는 과제 처리
            let remainTime = nextTime - (stTime + pgTime);
            while (stack.length && remainTime > 0) {
                let [prevType, prevRemain] = stack.pop(); // 제일 최근 타임
                
                if (prevRemain <= remainTime) {
                    ans.push(prevType);
                    remainTime -= prevRemain;
                } else {
                    stack.push([prevType, prevRemain - remainTime]);
                    remainTime = 0;
                }
            }
        
        } else {
            let usedTime = nextTime - stTime;
            stack.push([type, pgTime - usedTime]);
            // console.log('stack', stack);
        }
        // console.log('ans', ans);
    }
    ans.push(plans[plans.length - 1][0]);

    while (stack.length) {
        ans.push(stack.pop()[0]);
    }
    
    return ans;
}