function solution(n) {
    var answer = [];
    
    for (let i=1; i<=n; i++) {
        if (i === 1) answer.push(i);
        else if (i % 2 !== 0) answer.push(i);
    }
    
    return answer;
}