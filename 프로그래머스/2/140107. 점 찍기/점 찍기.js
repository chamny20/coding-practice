function solution(k, d) {
    var answer = 0;
    
    for (let x=0; x<=d; x+=k) {
        let y = Math.floor(Math.sqrt(d*d - x*x));
        answer += parseInt(y/k) + 1;
    }
    
    return answer;
}