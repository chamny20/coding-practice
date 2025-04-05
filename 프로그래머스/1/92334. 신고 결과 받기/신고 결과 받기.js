function solution(id_list, report, k) {
    // 신고한 목록 확인 가능한 obj
    const perObj = {};
    // report 당한 횟수
    const reportCnt = {};
    
    id_list.forEach((name) => {
        perObj[name] = perObj[name] || [];
        reportCnt[name] = reportCnt[name] || 0;
    });
    
    report.forEach((list) => {
        const [from, to] = list.split(' ');
        
        if (!perObj[from].includes(to)) {
            perObj[from].push(to);
            reportCnt[to] += 1;
        }
    })

    // console.log(perObj);
    // console.log(reportCnt);
    // filtering reportCnt
    const people = Object.keys(reportCnt).filter(n => reportCnt[n] >= k);
    
    const ans = [];
    for (const key in perObj) {
        let cnt = 0;
        const arr = perObj[key];
        cnt += arr.filter(name => people.includes(name)).length;
        ans.push(cnt);
    }
    return ans;
}