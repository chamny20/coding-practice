function solution(participant, completion) {
    const obj = {};
    participant.forEach((name) => {
        obj[name] = (obj[name] || 0) + 1;
    });
    
    let ans = '';
    
    completion.forEach((name) => {
        if (obj[name] && obj[name] > 0) {
            obj[name] -= 1;
        } 
    })
    
    ans = Object.keys(obj).filter(n => obj[n] === 1).toString();
    
    return ans;
}

