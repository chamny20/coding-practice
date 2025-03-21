function solution(n, t, m, p) {
    var convertStr = '';
    // n진법, 미리 구할 숫자 개수 t, 게임인원 m, 튜브의 순서 P
    let arr = [];
    // 0 1 10 11 
    // t * m
    for (let i=0; i<t*m; i++) {
        convertStr += i.toString(n).toUpperCase();
    }
    
    let answer = '';
    for (let i=p-1; i<convertStr.length; i+=m) {
        answer += convertStr[i];
    }
    
    return answer.slice(0, t);
}