function solution(s) {
    var answer = 0;
    
    let a = 0;
    let b = 0;
    
    let word = '';
    let isTrue = true;
    
    for (let i=0; i<s.length; i++) {
        if (isTrue)
            word = s[i];
        if (word == s[i]) {
            a++;
            isTrue = false;
        } else
            b++;
        console.log(a,b);
        if (a == b) {
            answer++;
            a=0;
            b=0;
            isTrue = true;
        }
    }
    if (a==0 && b==0) {
        answer = answer;
    } else
        answer = answer+1;
    return answer;
}


//처음에 문제 이해하는데 오랜 시간이 걸렸음
//그냥 횟수를 이용해서 횟수 비교로 푸는 게 더 합리적이라고 생각
