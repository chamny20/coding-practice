function solution(enroll, referral, seller, amount) {
    var answer = [];
    let realAmount = amount.map((item) => item*100);
    
    // 추천인 관련 오브젝트 생성
    let parent = {};
    for (let i=0; i<enroll.length; i++) {
        parent[enroll[i]] = referral[i];
    }
    
    // 사람별 이익금 담을 오브젝트 생성
    const total = {};
    for (let i=0; i<enroll.length; i++) {
        total[enroll[i]] = 0;
    }
    
    // console.log(parent)
    
    for (let i=0; i<seller.length; i++) {
        let curName = seller[i];
        let curAmount = realAmount[i];
        
        while(curAmount>0 && curName !== '-') {
            let referralShare = Math.floor(curAmount * 0.1);
            let keepShare = curAmount - referralShare;
            total[curName] += keepShare;
            curName = parent[curName];
            curAmount = referralShare;
        }
    }
    
    // for (let i=0; i<enroll.length; i++) {
    //     answer.push(total[enroll[i]]);
    // }
    
    answer = enroll.map((name) => total[name]);
    
    
    return answer;
}