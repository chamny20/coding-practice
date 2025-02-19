function solution(myString, pat) {
    var answer = 0;
    let idx = myString.indexOf(pat);
    
    while (idx !== -1) {
        answer++;
        idx = myString.indexOf(pat, idx + 1);
    }
    
    return answer;
}