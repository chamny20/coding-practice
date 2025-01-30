function solution(n, k) {
    var answer = [];
    let i = 1;
    while (i * k <= n) {
        answer.push(i * k);
        i++;
    }
    
    return answer;
}