function solution(schedules, timelogs, startday) {
    var answer = 0;
    const limitTime = [];
    // 각 직원별 리밋 시간
    schedules.forEach(num => {
        if ((num % 100) + 10 >= 60) {
            let newT = (Math.floor(num / 100) + 1) * 100 + ((num % 100) + 10) - 60;
            limitTime.push(newT);
        } else
            limitTime.push(num + 10);
    });
    console.log('limit', limitTime);
    
    for (let i=0; i<schedules.length; i++) {
        const list = timelogs[i];
        let isValid = true;
        
        for (let j=0; j<list.length; j++) {
            const num = list[j];
            // 요일도 체크하고
            if (((startday + j) % 7) > 0 && ((startday + j) % 7) < 6) {
                if (num <= limitTime[i]) {
                    isValid = true;
                } else {
                    isValid = false;
                    break;
                }
            }
            // console.log('isvalid', isValid)
        }

        if (isValid) answer++;
        // console.log('answer', answer)
        
    }
    
    
    return answer;
}