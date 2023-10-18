function solution(n) {
    var answer = 0;
    let arr = [];
    let idx = 1;
    
    while(idx<=n) {
        if(n%idx == 0)
            arr.push(idx);
        idx++;
    }
    
    for (let i of arr) {
        if(i%2 !== 0)
            answer++;
    }
        
    return answer;
}

/* 
15 / 2 = 7 ...1
1 3 5 15
16 1 2 4 8 16
17 = 1 17
17
98
123456

=> 홀수인 약수 개수 == 연속된 자연수들로 표현하는 방법의 수
*/