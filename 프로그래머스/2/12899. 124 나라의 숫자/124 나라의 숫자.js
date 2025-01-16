function solution(n) {
    var answer = '';
    
    if (n < 3)  return String(n);
    if (n === 3) return '4';
    
    while (n > 0) {
        if (n % 3 === 1) {
            answer = '1' + answer;
            n = Math.floor(n / 3);
        } else if (n % 3 === 2) {
            answer = '2' + answer;
            n = Math.floor(n / 3);
        } else if (n % 3 === 0) {
            answer = '4' + answer;
            n = Math.floor((n-1) / 3);
        }
    }
    
    return answer;
    
}